const SPREADSHEET_ID = "13zytP1m0j286GOyRDQw5W6fbqu7g4RkEOmeNXp559_Q";
const SHEET_NAME = "Sheet1";

function setupSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Tarikh", "Kelas", "Nama Murid", "Ujian", "Markah", "Gred", "TP", "Status"]);
  }

  return sheet;
}

function doGet(e) {
  const sheet = setupSheet();
  const values = sheet.getDataRange().getValues();
  const output = [];

  for (let i = 1; i < values.length; i++) {
    if (values[i][1] && values[i][2]) {
      output.push({
        tarikh: values[i][0],
        kelas: values[i][1],
        nama: values[i][2],
        ujian: values[i][3],
        markah: values[i][4],
        gred: values[i][5],
        tp: values[i][6],
        status: values[i][7]
      });
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = setupSheet();

  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action || "save";

    if (action === "saveAll") {
      const items = data.items || [];
      items.forEach(item => upsertItem(sheet, item));
    } else {
      const item = data.item || data;
      upsertItem(sheet, item);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "OK" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ERROR", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function upsertItem(sheet, item) {
  const kelas = item.kelas || "";
  const nama = item.nama || "";
  const ujian = item.ujian || "UPSA";
  const markah = Number(item.markah) || 0;
  const gred = item.gred || kiraGred(markah);
  const tp = item.tp || kiraTP(markah);
  const status = item.status || kiraStatus(markah);

  const lastRow = sheet.getLastRow();

  if (lastRow >= 2) {
    const data = sheet.getRange(2, 1, lastRow - 1, 8).getValues();

    for (let i = 0; i < data.length; i++) {
      const rowKelas = data[i][1];
      const rowNama = data[i][2];
      const rowUjian = data[i][3];

      if (rowKelas === kelas && rowNama === nama && rowUjian === ujian) {
        const targetRow = i + 2;
        sheet.getRange(targetRow, 1, 1, 8).setValues([[new Date(), kelas, nama, ujian, markah, gred, tp, status]]);
        return;
      }
    }
  }

  sheet.appendRow([new Date(), kelas, nama, ujian, markah, gred, tp, status]);
}

function kiraGred(markah) {
  markah = Number(markah);
  if (markah >= 85) return "A";
  if (markah >= 70) return "B";
  if (markah >= 55) return "C";
  if (markah >= 40) return "D";
  return "E";
}

function kiraTP(markah) {
  markah = Number(markah);
  if (markah >= 85) return 6;
  if (markah >= 70) return 5;
  if (markah >= 55) return 4;
  if (markah >= 40) return 3;
  if (markah >= 20) return 2;
  return 1;
}

function kiraStatus(markah) {
  return Number(markah) >= 40 ? "Menguasai" : "Belum Menguasai";
}
