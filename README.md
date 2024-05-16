<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=shift_jis">
<meta name=Generator content="Microsoft Word 15 (filtered)">

</head>

<body lang=JA style='word-wrap:break-word;text-justify-trim:punctuation'>

<div class=WordSection1 style='layout-grid:18.0pt'>

<h1><span style='font-size:11.0pt;line-height:107%'>はじめに</span></h1>

<p class=MsoNormal style='line-height:16.0pt'><span style='font-size:10.5pt'>大学での出席調査を目的に<span
&gt;>Google Spread Sheet</span>の<span &gt;>Google Apps Script (GAS)
</span>として動作する出席フォームを作成しました。この<span &gt;>GAS</span>は<span &gt;>Web</span>アプリとして動作します。デプロイした<span
&gt;>GAS</span>の<span &gt;>Web</span>アプリ<span &gt;>URL</span>を開くと，フォーム画面が表示され，回答すると，<span
&gt;>GAS</span>に紐づいている<span &gt;>Spread Sheet</span>に出席が記録されます。</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h2><span style='font-size:10.5pt;line-height:107%'>この<span &gt;>GAS</span>を用いたフォームの特徴</span></h2>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>GPS</span><span style='font-size:10.5pt'>情報から学内に居るかを判定</span></p>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>設定した時間内で同一デバイスから異なる学籍番号による出席登録を拒否</span></p>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>学籍リストによる誤入力の防止</span></p>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>出席をとる（講義など）曜日と時間と時間長定義可能</span></p>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>学生は出席回数を自分で目視確認できる</span></p>

<p class=List 
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>WEB</span><span style='font-size:10.5pt'>サーバが不要</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h1><span style='font-size:11.0pt;line-height:107%'>準備</span></h1>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>I.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Google Spread Sheet </span><span
style='font-size:10.5pt'>を新規作成する。</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>II.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Google Spread Sheet</span><span
style='font-size:10.5pt'>に“名簿<span &gt;>”</span>，“出席<span &gt;>”</span>，“集計<span
&gt;>”</span>シートを作成する。以下に各シートの列配置を示します。</span></p>

<p class=List style='margin-left:40.0pt;text-indent:-18.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>1.<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>“</span><span style='font-size:10.5pt'>名簿<span
&gt;>”</span>シート</span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>A</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>学籍番号</span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>B</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>氏名</span></p>

<p class=List style='margin-left:40.0pt;text-indent:-18.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>2.<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>“出席”シート<span &gt;>(WebApp</span>フォームからの入力内容が反映されます<span
&gt;>)</span></span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>A</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>学籍番号</span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>B</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>緯度</span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>C</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>経度</span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>D</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>デバイス<span &gt;>ID</span></span></p>

<p class=MsoNormal style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>E</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>出席日</span></p>

<p class=List style='margin-left:40.0pt;text-indent:-18.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>3.<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>“</span><span style='font-size:10.5pt'>集計<span
&gt;>”</span>シート</span></p>

<p class=MsoNormal style='margin-left:22.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>A</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>学籍番号（“名簿”シートからコピー参照する式を入れておく）</span></p>

<p class=MsoNormal style='margin-left:22.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>B</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>氏名（“名簿”シートからコピー参照する式を入れておく）</span></p>

<p class=MsoNormal style='margin-left:22.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>C</span><span style='font-size:10.5pt'>列<span
&gt;>: </span>出席回数<span &gt;>(CountIF</span>関数を用い，“出席”シートから回数を拾うようにしておく<span
&gt;>)</span></span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>III.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Google Spread Sheet</span><span
style='font-size:10.5pt'>の<span &gt;>Google Apps Script</span>を開き，<span
&gt;>Code.gs</span>と<span &gt;>index.html</span>を作成。そこに，以下の<span
&gt;>IV</span>で生成<span &gt;>/</span>編集した各コード内容を貼り付けます。</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>IV.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span style='font-size:10.5pt'>必ず設定する必要があるのは，<span &gt;>index.html</span>です。ここで，パラメータを変更してください。</span></p>

<p class=List style='margin-left:36.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>Wrapper for generating index.html</span><span
style='font-size:10.5pt'>をローカルにダウンロードして，フォーム内の必要事項（各変数）を設定し，「<span &gt;>HTML</span>生成！」ボタンを押下して，<span
&gt;>index.html</span>を生成します。</span></p>

<p class=List style='margin-left:55.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>設定可能な変数<span &gt;>: </span>ロゴ<span &gt;>URL</span>（<span
&gt;>Google</span>ドライブ内に配置する。共有設定で「リンクを知っている全員」が閲覧権限でアクセスできるようにしておく），利用者用手引き<span
&gt;>URL</span>（画像ファイル。ロゴと同様に設定する），科目名，曜日・開始時間・出席入力可能時間，学籍番号リスト，背景色，経度と緯度の範囲が設定できます。<u>なお，経度と緯度については，事前に校舎の緯度と経度の範囲を設定しておく必要があります。</u></span></p>

<p class=List style='margin-left:55.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>緯度と経度の範囲は，<span &gt;>Wrapper</span><b><u>ソース内</u></b>の“緯度と経度の範囲”の<span
&gt;>option value </span>選択内の緯度と経度の範囲と選択肢の表示部分を設定することでプルダウン選択できます。以下の書式で，事前にキャンパスの各校舎の緯度と経度の範囲を<span
&gt;>Google Map</span>などで調べて，選択項目を編集・追加してください。</span></p>

<p class=List style='margin-left:55.0pt;line-height:16.0pt'><i><span
style='font-size:8.0pt'>書式<span &gt;>: &lt;option value=&quot;</span>最小緯度<span
&gt;>,</span>最大緯度<span &gt;>,</span>最小経度<span &gt;>,</span>最大経度<span
&gt;>&quot;&gt;</span>〇〇キャンパス<span &gt;>AA</span>校舎<span
&gt;>&lt;/option&gt; </span></span></i></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>V.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span style='font-size:10.5pt'>必要に応じて，<span &gt;>Code.gs</span>のパラメータを変更する。</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
style='font-size:10.5pt'>通常，<span &gt;>Code.gs</span>のソース内はあまり触れることはないと思います。大学によっては<span
&gt;>90</span>分，<span &gt;>100</span>分授業などの違いがありますので，下記部分を変更してください。</span></p>

<p class=List style='margin-left:36.0pt;line-height:16.0pt'><i><span
&gt; style='font-size:7.0pt'>const execMarginMin = 90; //</span></i><i><span
style='font-size:7.0pt'>重複入力を拒否する時間長（分）ここを変えれば，<span &gt;>90</span>分授業，<span
&gt;>100</span>分授業に対応</span></i></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VI.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span style='font-size:10.5pt'>編集をおこなった<span &gt;>index.html</span>を貼り付け，または<span
&gt;>Code.gs</span>を直接編集するなどした後に編集内容を保存してください。</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VII.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span style='font-size:10.5pt'>デプロイメントをおこなってください。なお，権限設定は実行するユーザは当該の<span
&gt;>Google Spread Sheet</span>に編集権限があるアカウント，アクセスできるユーザは「全員」を選択してください。</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VIII.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span style='font-size:10.5pt'>デプロイした<span &gt;>Web</span>アプリの<span
&gt;>URL</span>にアクセスして，動作確認をおこなってください。</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>IX.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Web</span><span
style='font-size:10.5pt'>アプリの<span &gt;>URL</span>ではなく，実際に<span
&gt;>Web</span>アプリが表示されたときの<span &gt;>URL</span>をコピーして，学生に<span
&gt;>URL</span>を告知してください。このような方法をとる理由は，当方の環境では，<span &gt;>GAS</span>デプロイ時の<span
&gt;>URL</span>では<span &gt;>iOS</span>上の<span &gt;>Chrome</span>ではアクセスできないという問題が生じました。このため，<span
&gt;>PC</span>などで一度<span &gt;>URL</span>を開いた後に大学のドメインに一部置き換えられらた後の<span
&gt;>URL</span>を告知するようにしてください。</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h2>参考にさせていただいたサイト</h2>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span style='font-size:10.5pt'>こちらのサイトのおかげで，作成することができました。</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span style='font-size:10.5pt'>このほか，<span
&gt;>javascript</span>関連，ならびに<span &gt;>CORS</span>エラーの回避法など，多くのサイトを参考にさせていただきました。感謝いたします。</span></p>

<h2>注意事項<span &gt;>: </span>本スクリプト(code.gs, index.html, wrapper-for-generating-index.html) の商用利用はご遠慮ください。</h2>

<h1><span &gt;>README-En</span></h1>

<h2><span &gt;>Introduction.</span></h2>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>I have created an attendance form that runs as a
Google Apps Script (GAS) on Google Spread Sheet for the purpose of surveying
attendance at a university. This GAS runs as a web app. When the deployed GAS
web app URL is opened, the form screen is displayed, and when the user answers,
the attendance is recorded in Spread Sheet, which is linked to GAS.</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h2><span &gt;>Features of this GAS-based form</span></h2>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Determines if a student is on campus
based on GPS information</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Rejects attendance registration with
different student ID numbers from the same device within a set time period</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Prevents incorrect entry by student
register list</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Take attendance (e.g., lectures) days
of the week and times and time lengths can be defined</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Students can visually check
attendance by themselves</span></p>

<p class=List style='margin-left:58.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>No need for a web server</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h2><span &gt;>Preparation</span></h2>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>I.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Create a new Google
Spread Sheet.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>II.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Create &quot;Name list&quot;,
&quot;Attendance&quot;, and &quot;Total&quot; sheets in Google Spread Sheet.
The column arrangement of each sheet is shown below. 1.</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>1. &quot;Name list&quot; sheet</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column A: Student ID number</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column B: Name</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>2. &quot;Attendance&quot; sheet (the entries from the
WebApp form will be reflected)</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column A: Student ID</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column B: Latitude</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column C: Longitude</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column D: Device ID</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column E: Date of attendance</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>3. &quot;Total&quot; sheet</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column A: Student ID (copy the formula from the &quot;Name
list&quot; sheet)</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column B: Name (copy the formula from the &quot;Name
list&quot; sheet)</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Column C: Attendance (use CountIF function to pick up
the number of attendances from the &quot;Attendance&quot; sheet)</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>III.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Open Google Apps Script
of Google Spread Sheet and create Code.gs and index.html. Paste the contents of
each code generated/edited in IV below into the code.gs and index.html.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>IV.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>The code that must be
set is index.html. Here, change the parameters.</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Download the Wrapper for generating index.html
locally, set the necessary items (variables) in the form, and click the
&quot;Generate HTML! button to generate index.html.</span></p>

<p class=List style='margin-left:27.25pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Variables that can be set: Logo URL (to be
placed in Google Drive. (The logo URL should be placed in Google Drive, so that
&quot;everyone who knows the link&quot; can access it with read permission in
the sharing settings), the user guide URL (an image file, set in the same way
as the logo), and the subject URL. The following can be set: course name, day
of the week, start time, attendance input time, student ID number list,
background color, longitude and latitude range. For longitude and latitude, you
need to set the latitude and longitude range of your school building in
advance.</span></p>

<p class=List style='margin-left:27.25pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>The latitude and longitude ranges can be
pulled down by setting the latitude and longitude ranges in the &quot;Latitude
and Longitude Ranges&quot; option value selection in the Wrapper source and the
display portion of the choices. Please check the latitude and longitude range
of each campus building in advance using Google Maps, etc., and edit or add
your selections using the following format.</span></p>

<p class=List style='margin-left:27.25pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>Format: &lt;option value=&quot;minimum
latitude,maximum latitude,minimum longitude,maximum longitude&quot;&gt;00
Campus AA Building&lt;/option&gt;. </span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>V.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Change the parameters
of Code.gs as necessary.</span></p>

<p class=List style='margin-left:33.0pt;text-indent:-22.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>l<span
style='font:7.0pt "Times New Roman"'> </span></span><span
&gt; style='font-size:10.5pt'>Normally, you will not touch much within
the Code.gs source. Some universities have different 90-minute or 100-minute
classes, etc. Change the following part.</span></p>

<p class=List style='margin-left:33.0pt;line-height:16.0pt'><span
&gt; style='font-size:10.5pt'>const execMarginMin = 90; //Time length to
reject duplicate input (minutes) Change this to correspond to 90-minute or
100-minute classes.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VI.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Paste the edited
index.html or edit Code.gs directly and save the edited contents.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VII.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Deploy the application.
Please select &quot;All&quot; as the user who can access the Google Spread
Sheet and &quot;All&quot; as the user who has the permission to edit the Google
Spread Sheet.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>VIII.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Access the URL of the
deployed web application and check its operation.</span></p>

<p class=List style='margin-left:36.0pt;text-indent:-36.0pt;
line-height:16.0pt'><span &gt; style='font-size:10.5pt'>IX.<span
style='font:7.0pt "Times New Roman"'>
</span></span><span &gt; style='font-size:10.5pt'>Please copy the URL of
the actual web application and inform the students of the URL, not the URL of
the web application. The reason for doing this is that in our environment, the
URL at the time of GAS deployment was not accessible in Chrome on iOS. For this
reason, please open the URL on a PC, etc., and then announce the URL after it
has been partially replaced by the university domain.</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

<h2><span &gt;>References</span></h2>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>https://qiita.com/tamoco/items/8d0d6ef0df6c4c605a08</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>Thanks to this site, I was able to create this site.</span></p>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'>In addition, many other sites related to javascript
and workarounds for CORS errors were also helpful. Thank you very much.</span></p>

<h2><span &gt;>Note: Please do not use this site's scripts for commercial purposes.</span></h2>

<p class=MsoNormal style='line-height:16.0pt'><span &gt;
style='font-size:10.5pt'></span></p>

</div>

</body>

</html>
