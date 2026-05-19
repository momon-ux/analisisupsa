const SHEET_NAME = "Sheet1";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = JSON.parse(e.postData.contents);

  if (data.action === "saveAll") {
    sheet.clearContents();
    sheet.appendRow(["Tarikh", "Kelas", "Nama Murid", "Ujian", "Markah", "Gred", "TP", "Status"]);

    const rows = (data.records || []).map(item => [
      new Date(),
      item.kelas,
      item.nama,
      item.ujian,
      item.markah,
      item.gred,
      item.tp,
      item.status
    ]);

    if (rows.length > 0) {
      sheet.getRange(2, 1, rows.length, 8).setValues(rows);
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const json = JSON.stringify(data);

  if (e && e.parameter && e.parameter.callback) {
    return ContentService
      .createTextOutput(e.parameter.callback + "(" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
