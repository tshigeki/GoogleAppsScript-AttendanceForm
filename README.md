<p>GoogleSpreadSheetのGASとして動作する出席フォームです。大学での出席調査を目的に作成しました。<br>
このGASはWebアプリとしてデプロイして利用します。GASのWebアプリURLを開くと，フォーム画面が表示され，回答すると，SpreadSheetに出席が記録されます。</p>

## このGASを用いたフォームの特徴は，GPS情報から，学内に居るかを判定する・同じデバイス情報で，一定時間内に異なる学籍番号による出席登録を拒否・学籍リストによる誤入力の防止・出席をとる曜日・時間と長さを定義可能・GASによって出席フォームhtmlを作成するので，WEBサーバが不要という点です。

### <準備>
### I.スプレッドシートには事前に”名簿”，”出席”，”集計”シートを事前準備しておく必要があります。以下に各シートの列配置を示します。<br>
#### 1. 名簿シート
 A列: 学籍番号，B列: 氏名 
#### 2. 出席シート(フォームからの入力内容)
 A列: 学籍番号，B列: 緯度，C列: 経度, D列: DeviceID, E列: 入力日
#### 3. 集計シート
 A列: 学籍番号（名簿シートからコピー参照），B列: 氏名（名簿シートからコピー参照）, C列: 出席回数(CountIF関数を出席シートから拾うようにしておく)
### II. GoogleSpreadSheetのGoogleAppsScriptを開き，Code.gsとindex.htmlを作成。そこに，各コード内容を貼り付けます。
### III. 必要に応じて，index.htmlのパラメータを変更する。
 パラメータ内容: 許可位置情報（経度，緯度），科目名，曜日・開始時間・出席入力可能時間，学籍番号リスト，大学ロゴ，背景色，位置情報許可の設定解説ファイルURL
### IV.　必要に応じて，code.gsのパラメータを変更する。
  パラメータ内容: 重複入力不可の時間
### V. デプロイメントをおこなう。
<p>以上の手順を踏むことで，動作します。<br>

 

 参考にさせていただいたサイト<br>
https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08<br>
こちらのサイトのおかげで，作成することができました。<br>
このほか，javascript関連，ならびにCORSエラーの回避法など，多くのサイトを参考にさせていただきました。感謝いたします。</p>
### 注意事項: 商用利用はご遠慮ください。

# ===README in Eng.===
This is an attendance form that works as a GAS in GoogleSpreadSheet. It was created for the purpose of surveying attendance at a university.<br>
This GAS is deployed and used as a web app.<br>
When the GAS web app URL is opened, the form screen is displayed, and attendance is recorded in SpreadSheet when the user answers.</p>

## The features of the form using GAS are as follows: judging whether the user is in the campus based on GPS information, rejecting attendance registration by different student ID numbers within a certain period of time using the same device information, preventing wrong input by the student ID list, defining the day, time, and length of attendance, and creating attendance form html using GAS, so a web server is not necessary.
## <Preparation>
### I. The "Name list", "Attendance", and "Total" sheets must be prepared in advance in SpreadSheet. The column layout of each sheet is shown below. 1.
#### 1. Name list sheet
 　Column A: Student ID number, Column B: Name  
#### 2. Attendance sheet (input from the form)
 　Column A: Student ID, Column B: Latitude, Column C: Longitude, Column D: DeviceID, Column E: Date of entry
#### 3. Total sheet
 　Column A: Student ID (copied from the Name list sheet), Column B: Name (copied from the Name lisy sheet), Column C: Attendance count (make sure that the CountIF function is picked up from the Attendance sheet)
### II. Open GoogleAppsScript of GoogleSpreadSheet and create Code.gs and index.html. Paste the contents of each codes there.
### III. If necessary, change the parameters of index.html.
　　Parameter contents: Permitted location information (longitude, latitude), course name, day of the week, start time, available time for attendance input, student ID number list, university logo, background color, URL of file explaining location information permission settings
### IV. Change the parameters of code.gs as necessary.
   Parameter contents: Time when duplicate entry is not allowed
### V. Perform deployment.

<p>The above steps will make the application work.<br>
referenced site<br>
https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08<br>
Special thanks to @tamoco.<br>
In addition, many other sites related to javascript and workarounds for CORS errors were also helpful. Thank you very much.</p>

 ### Note: Commercial use is not permitted.
