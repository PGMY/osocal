var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these titles relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var titles = [
    {
        date: "2016-03-12T15:00:00.000Z",
        title: "家宝は寝て松HARU21",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "赤ブーブー"
    },
    {
        date: "2016-03-26T15:00:00.000Z",
        title: "HighカラMAX（松野カラ松中心）",
        "holl": "幕張メッセ",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-04-23T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー2",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-04T15:00:00.000Z",
        title: "松野十四松中心",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-07T15:00:00.000Z",
        title: "おそ松さんスペシャルイベント（公式）",
        "holl": "幕張メッセ",
        "link": "http://osomatsusan.com/news/detail.php?id=1031419",
        "location": "東京",
        "sponsor": "公式"
    },
    {
        date: "2016-05-28T15:00:00.000Z",
        title: "家宝は寝て松3～お誕SP～",
        "holl": "インテックス大阪",
        "link": "",
        "location": "大阪",
        "sponsor": "赤ブーブー"
    },
    {
        date: "2016-06-18T15:00:00.000Z",
        title: "家宝は寝て松4",
        "holl": "東京ビックサイト", 
        "link": "",
        "location": "東京",
        "sponsor": "赤ブーブー"
    },
    {
        date: "2016-06-25T15:00:00.000Z",
        title: "松野一松中心",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-07-17T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー3",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-08-06T15:00:00.000Z",
        title: "松野チョロ松受",
        "holl": "TRC",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-08-20T15:00:00.000Z",
        title: "松野おそ松受",
        "holl": "都産台東",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-08-27T15:00:00.000Z",
        title: "松野トド松受",
        "holl": "TRC",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-09-17T15:00:00.000Z",
        title: " 松野カラ松×松野一松",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-09-17T15:00:00.000Z",
        title: "シェーパラ！～シェーパラダイス～（イヤミ中心）",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-09-17T15:00:00.000Z",
        title: "松野一松×松野カラ松",
        "holl": "東京ビックサイト",
        "link": "",
        "location": "東京",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-03-19T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー大阪",
        "holl": "インテックス大阪",
        "link": "",
        "location": "大阪",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-04-30T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー大阪2",
        "holl": "インテックス大阪",
        "link": "",
        "location": "大阪",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-03-20T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー福岡",
        "holl": "福岡国際センター",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-03T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー札幌",
        "holl": "つどーむ",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-03T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 福岡2",
        "holl": "福岡国際会議場",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-04T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー広島",
        "holl": "広島市中小企業会館",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-07T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 仙台",
        "holl": "仙台国際センター",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-05-07T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー　沖縄",
        "holl": "沖縄コンベンションセンター",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-06-11T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 名古屋",
        "holl": "ポートメッセなごや",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-07-23T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 札幌2",
        "holl": "つどーむ",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-07-23T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 仙台2",
        "holl": "夢メッセみやぎ",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-07-30T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー 福岡3",
        "holl": "福岡国際会議場",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-10-08T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー名古屋2",
        "holl": "ポートメッセなごや",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    },
    {
        date: "2016-12-10T15:00:00.000Z",
        title: "6つ子の魂☆フォーエバー名古屋3",
        "holl": "ポートメッセなごや",
        "link": "",
        "location": "その他",
        "sponsor": "スタジオYou"
    }
];

  clndr = $('#full-clndr').clndr({
    template: $('#full-clndr-template').html(),
    titles: titles,
    forceSixRows: true
  });

});
