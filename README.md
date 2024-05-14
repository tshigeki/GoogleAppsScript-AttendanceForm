GoogleSpreadSheetのGASとして動作する出席フォームです。大学での出席調査を目的に作成しました。
このGASはWebアプリとしてデプロイして利用します。
GASのWebアプリURLを開くと，フォーム画面が表示され，回答すると，SpreadSheetに出席が記録されます。

<準備>
I.スプレッドシートには事前に”名簿”，”出席”，”集計”シートを事前準備しておく必要があります。以下に各シートの列配置を示します。
1. 名簿シート
 A列: 学籍番号，B列: 氏名 
2. 出席シート(フォームからの入力内容)
 A列: 学籍番号，B列: 緯度，C列: 経度, D列: DeviceID, E列: 入力日
3. 集計シート
 A列: 学籍番号（名簿シートからコピー参照），B列: 氏名（名簿シートからコピー参照）, C列: 出席回数(CountIF関数を出席シートから拾うようにしておく)
II.GoogleSpreadSheetのGoogleAppsScriptを開き，Code.gsとindex.htmlを作成。そこに，本コード内容を貼り付けます。
III. 必要に応じて，index.htmlのパラメータを変更する。
 パラメータ内容: 許可位置情報（経度，緯度），科目名，曜日・開始時間・出席入力可能時間，学籍番号リスト，大学ロゴ，背景色，位置情報許可の設定解説ファイルURL
IV.　必要に応じて，code.gsのパラメータを変更する。
  パラメータ内容: 重複入力不可の時間
V. デプロイメントをおこなう。

以上の手順を踏むことで，動作します。

参考にさせていただいたサイト
https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08
こちらのサイトのおかげで，作成することができました。
このほか，javascript関連，ならびにCORSエラーの回避法など，多くのサイトを参考にさせていただきました。感謝いたします。

===README in Eng.===
This is an attendance form that works as a GAS in GoogleSpreadSheet. It was created for the purpose of surveying attendance at a university.
This GAS is deployed and used as a web app.
When the GAS web app URL is opened, the form screen is displayed, and attendance is recorded in SpreadSheet when the user answers.

<Preparation>
I. The "Roster", "Attendance", and "Total" sheets must be prepared in advance in SpreadSheet. The column layout of each sheet is shown below. 1.
　1. name list sheet
 　Column A: Student ID number, Column B: Name  
　Attendance sheet (input from the form)
 　Column A: Student ID, Column B: Latitude, Column C: Longitude, Column D: DeviceID, Column E: Date of entry
　3. tally sheet
 　Column A: Student ID (copied from the roster sheet), Column B: Name (copied from the roster sheet), Column C: Attendance count (make sure that the CountIF function is picked up from the attendance sheet)
II. Open GoogleAppsScript of GoogleSpreadSheet and create Code.gs and index.html. Paste the contents of this code there.
III. If necessary, change the parameters of index.html.
　　Parameter contents: Permitted location information (longitude, latitude), course name, day of the week, start time, available time for attendance input, student ID number list, university logo, background color, URL of file explaining location information permission settings
IV. Change the parameters of code.gs as necessary.
   Parameter contents: Time when duplicate entry is not allowed
V. Perform deployment.

The above steps will make the application work.

referenced site
https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08
Special thanks to @tamoco.
In addition, many other sites related to javascript and workarounds for CORS errors were also helpful. Thank you very much.
