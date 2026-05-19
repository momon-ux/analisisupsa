const SPREADSHEET_ID = "13zytP1m0j286G0yRDQw5W6fbqu7g4RkE0meI";
const SHEET_NAME = "Sheet1";

function doPost(e) {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  const data = JSON.parse(e.postData.contents);

  sheet.clearContents();

  sheet.appendRow([
    "Tarikh",
    "Kelas",
    "Nama Murid",
    "Ujian",
    "Markah",
    "Gred",
    "TP",
    "Status"
  ]);

  data.records.forEach(item => {

    sheet.appendRow([
      new Date(),
      item.kelas,
      item.nama,
      item.ujian,
      item.markah,
      item.gred,
      item.tp,
      item.status
    ]);

  });

  return ContentService
    .createTextOutput(JSON.stringify({
      result: "success"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  const data = sheet.getDataRange().getValues();

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
