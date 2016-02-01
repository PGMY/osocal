var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
    {date:'2016-03-13',title:'家宝は寝て松HARU21',url:'',location:'東京ビックサイト@東京',description:"てすと"},
    {date:'2016-03-27',title:'HighカラMAX（松野カラ松中心）',url:'',location:'幕張メッセ@東京'},
    {date:'2016-04-24',title:'6つ子の魂☆フォーエバー2',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-05-05',title:'松野十四松中心',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-05-08',title:'おそ松さんスペシャルイベント（公式）',url:'http://osomatsusan.com/news/detail.php?id=1031419',location:'幕張メッセ@東京'},
    {date:'2016-05-29',title:'家宝は寝て松3～お誕SP～',url:'',location:'インテックス大阪@大阪'},
    {date:'2016-06-19',title:'家宝は寝て松4',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-06-26',title:'松野一松中心',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-07-18',title:'6つ子の魂☆フォーエバー3',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-08-07',title:'松野チョロ松受',url:'',location:'TRC@東京'},
    {date:'2016-08-21',title:'松野おそ松受',url:'',location:'都産台東@東京'},
    {date:'2016-08-28',title:'松野トド松受',url:'',location:'TRC@東京'},
    {date:'2016-09-18',title:' 松野カラ松×松野一松',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-09-18',title:'シェーパラ！～シェーパラダイス～（イヤミ中心）',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-09-18',title:'松野一松×松野カラ松',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-03-20',title:'6つ子の魂☆フォーエバー大阪',url:'',location:'インテックス大阪@大阪'},
    {date:'2016-05-01',title:'6つ子の魂☆フォーエバー大阪2',url:'',location:'インテックス大阪@大阪'},
    {date:'2016-03-21',title:'6つ子の魂☆フォーエバー福岡',url:'',location:'福岡国際センター@その他'},
    {date:'2016-05-04',title:'6つ子の魂☆フォーエバー札幌',url:'',location:'つどーむ@その他'},
    {date:'2016-05-04',title:'6つ子の魂☆フォーエバー 福岡2',url:'',location:'福岡国際会議場@その他'},
    {date:'2016-05-05',title:'6つ子の魂☆フォーエバー広島',url:'',location:'広島市中小企業会館@その他'},
    {date:'2016-05-08',title:'6つ子の魂☆フォーエバー 仙台',url:'',location:'仙台国際センター@その他'},
    {date:'2016-05-08',title:'6つ子の魂☆フォーエバー　沖縄',url:'',location:'沖縄コンベンションセンター@その他'},
    {date:'2016-06-12',title:'6つ子の魂☆フォーエバー 名古屋',url:'',location:'ポートメッセなごや@その他'},
    {date:'2016-07-24',title:'6つ子の魂☆フォーエバー 札幌2',url:'',location:'つどーむ@その他'},
    {date:'2016-07-24',title:'6つ子の魂☆フォーエバー 仙台2',url:'',location:'夢メッセみやぎ@その他'},
    {date:'2016-07-31',title:'6つ子の魂☆フォーエバー 福岡3',url:'',location:'福岡国際会議場@その他'},
    {date:'2016-10-09',title:'6つ子の魂☆フォーエバー名古屋2',url:'',location:'ポートメッセなごや@その他'},
    {date:'2016-12-11',title:'6つ子の魂☆フォーエバー名古屋3',url:'',location:'ポートメッセなごや@その他'}];

  clndr = $('#full-clndr').clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true
  });

});
