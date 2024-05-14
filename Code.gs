const spreadId = SpreadsheetApp.getActiveSpreadsheet().getId(); //現在のスクリプトが紐づいているSpreadsheetのIDを取得
const sheetAttend = '出席';
const sheetCountName = '集計';
const idCol = 1;
const deviceCol = 4;
const updateCol = 5;
const execMarginMin = 90; //重複入力を拒否する時間長（分）ここを変えれば，90分授業，100分授業に対応

// 動的にAPIのURLを取得する関数
function getApiUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}

// 更新日のチェック
function updateCheck(id) {
  var sheetAt = SpreadsheetApp.openById(spreadId).getSheetByName(sheetAttend);
  var checkRow = findRow(sheetAt, idCol, id);

  if (checkRow > 0) {
    var date = new Date();
    var beforeUpdate = sheetAt.getRange(checkRow, updateCol).getValue();
    var diffTimeMin = (date - beforeUpdate) / (1000 * 60);
    return diffTimeMin > execMarginMin;
  }
  return true;
}

// デバイスIDのチェック
function deviceCheck(device) {
  var sheetAt = SpreadsheetApp.openById(spreadId).getSheetByName(sheetAttend);
  var checkRow = findRow(sheetAt, deviceCol, device);

  if (checkRow > 0) {
    var date = new Date();
    var beforeUpdate = sheetAt.getRange(checkRow, updateCol).getValue();
    var diffTimeMin = (date - beforeUpdate) / (1000 * 60);
    return diffTimeMin > execMarginMin;
  }
  return true;
}

// 行の検索
function findRow(sheet, col, val) {
  var dat = sheet.getDataRange().getValues();
  var row = 0;
  for (var i = 1; i < dat.length; i++) {
    if (dat[i][col - 1] == val) {
      row = i + 1;
    }
  }
  return row;
}

// 出席回数のカウント
function countAttendance(id) {
  var sheetCount = SpreadsheetApp.openById(spreadId).getSheetByName(sheetCountName);
  var checkRow = findRow(sheetCount, idCol, id);
  
  if (checkRow > 0) {
    var count = sheetCount.getRange(checkRow, 3).getValue(); // C列に合計回数がカウントされている
    return count;
  }
  return 0;
}

// Webアプリ用のGETリクエストハンドラ
function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  template.apiURL = getApiUrl(); // APIのURLをテンプレートに渡す
  var htmlOutput = template.evaluate();
  htmlOutput.setTitle('出席・位置情報登録システム');
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1'); // viewportの設定
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return htmlOutput;
}

// Webアプリ用のPOSTリクエストハンドラ
function doPost(e) {
  var resultData = {};

  if (!e.parameter || !e.parameter.id) {
    resultData.msg = "学籍番号が不正です";
    return ContentService.createTextOutput(JSON.stringify(resultData)).setMimeType(ContentService.MimeType.JSON);
  }

  if (!updateCheck(e.parameter.id)) {
    resultData.msg = "今日は既に出席登録されています";
    return ContentService.createTextOutput(JSON.stringify(resultData)).setMimeType(ContentService.MimeType.JSON);
  }

  var deviceId = e.parameter.device || generateDeviceId(); // デバイスIDの取得

  if (!deviceCheck(deviceId)) {
    resultData.msg = "同日に異なる学籍を同じデバイスから登録できません。";
    return ContentService.createTextOutput(JSON.stringify(resultData)).setMimeType(ContentService.MimeType.JSON);
  }

  var sheetAt = SpreadsheetApp.openById(spreadId).getSheetByName(sheetAttend);
  var addArray = [e.parameter.id, e.parameter.lat, e.parameter.lon, deviceId, new Date()];
  sheetAt.appendRow(addArray);

  // 学籍番号の出現回数をカウント
  var count = countAttendance(e.parameter.id);

  resultData.msg = "\n\n*******************************\n出席が登録されました!\n出席回数計: " + count + "回\n*******************************\n\n";
  return ContentService.createTextOutput(JSON.stringify(resultData)).setMimeType(ContentService.MimeType.JSON);
}
