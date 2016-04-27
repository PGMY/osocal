var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [{date:'2016-03-13',title:'家宝は寝て松HARU21',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-03-20',title:'6つ子の魂☆フォーエバー大阪',url:'',location:'インテックス大阪@大阪'},
    {date:'2016-03-21',title:'6つ子の魂☆フォーエバー福岡',url:'',location:'福岡国際センター@その他'},
    {date:'2016-03-27',title:'HighカラMAX（松野カラ松中心）',url:'',location:'幕張メッセ@東京'},
    {date:'2016-04-03',title:'HighカラMAX大阪',url:'http://www.youyou.co.jp/only/six/kara_osaka/',location:'インテックス大阪@大阪'},
    {date:'2016-04-03',title:'サイテキ速度matching大阪',url:'http://www.youyou.co.jp/only/six/sokudo_osaka/',location:'インテックス大阪@大阪'},
    {date:'2016-04-03',title:'ふたりの恋＋シーズン大阪',url:'http://www.youyou.co.jp/only/six/season_osaka/',location:'インテックス大阪@大阪'},
    {date:'2016-04-09',title:'ぴかイチじゅうしぃSweets',url:'http://www.youyou.co.jp/only/six/ichijyu/',location:'TRC@東京'},
    {date:'2016-04-09',title:'君カラ届いたLOVEレター',url:'http://www.youyou.co.jp/only/six/karatodo/',location:'TRC@東京'},
    {date:'2016-04-09',title:'恋のおそチョROAD～ノンストップラブ～',url:'http://www.youyou.co.jp/only/six/osotyo/',location:'TRC@東京'},
    {date:'2016-04-10',title:'きまぐれ4りんLOVE',url:'http://www.youyou.co.jp/only/six/ichi/',location:'東京ビッグサイト@東京'},
    {date:'2016-04-24',title:'6つ子の魂☆フォーエバー2',url:'http://www.youyou.co.jp/only/six/2/',location:'東京ビックサイト@東京'},
    {date:'2016-05-01',title:'6つ子の魂☆フォーエバー大阪2',url:'http://www.youyou.co.jp/only/six/osaka2/',location:'インテックス大阪@大阪'},
    {date:'2016-05-04',title:'6つ子の魂☆フォーエバー 福岡2',url:'http://www.youyou.co.jp/only/six/fukuoka2/',location:'福岡国際会議場@その他'},
    {date:'2016-05-04',title:'6つ子の魂☆フォーエバー 札幌',url:'http://www.youyou.co.jp/only/six/sapporo/',location:'つどーむ@その他'},
    {date:'2016-05-05',title:'Smileじゅうしマッスル',url:'http://www.youyou.co.jp/only/six/jyu/',location:'東京ビッグサイト@東京'},
    {date:'2016-05-05',title:'HighカラMAX 2',url:'http://www.youyou.co.jp/only/six/kara2/',location:'東京ビッグサイト@東京'},
    {date:'2016-05-05',title:'れっつ！女子マツ会',url:'http://www.youyou.co.jp/only/six/jyosima/',location:'東京ビッグサイト@東京'},
    {date:'2016-05-05',title:'Lovelyはなまるガールズ',url:'http://www.youyou.co.jp/only/six/lovely/',location:'東京ビッグサイト@東京'},
    {date:'2016-05-05',title:'6つ子の魂☆フォーエバー 広島',url:'http://www.youyou.co.jp/only/six/hirosima/',location:'広島市中小企業会館@その他'},
    {date:'2016-05-08',title:'おそ松さんスペシャルイベント（公式）',url:'http://osomatsusan.com/news/detail.php?id=1031419',location:'幕張メッセ@東京'},
    {date:'2016-05-08',title:'6つ子の魂☆フォーエバー 仙台',url:'http://www.youyou.co.jp/only/six/sendai/',location:'仙台国際センター@その他'},
    {date:'2016-05-08',title:'6つ子の魂☆フォーエバー 沖縄',url:'http://www.youyou.co.jp/only/six/okinawa/',location:'沖縄コンベンションセンター@その他'},
    {date:'2016-05-29',title:'家宝は寝て松3～お誕SP～',url:'',location:'インテックス大阪@大阪'},
    {date:'2016-05-29',title:'チョロりとおそわるラブルール',url:'http://www.youyou.co.jp/only/six/tyorooso/',location:'東京ビッグサイト@東京'},
    {date:'2016-05-29',title:'いちから真っ盛り',url:'http://www.youyou.co.jp/only/six/ichikara/',location:'東京ビッグサイト@東京'},
    {date:'2016-06-12',title:'6つ子の魂☆フォーエバー 名古屋',url:'http://www.youyou.co.jp/only/six/nagoya/',location:'ポートメッセなごや@その他'},
    {date:'2016-06-19',title:'家宝は寝て松4',url:'',location:'東京ビックサイト@東京'},
    {date:'2016-06-26',title:'ChiguHagu一抹模様',url:'http://www.youyou.co.jp/only/six/chigu/',location:'東京ビッグサイト@東京'},
    {date:'2016-06-26',title:'HighカラMAX福岡',url:'http://www.youyou.co.jp/only/six/kara_fukuoka/',location:'博多スターレーン@その他'},
    {date:'2016-06-26',title:'Smileじゅうしマッスル福岡',url:'http://www.youyou.co.jp/only/six/jyu_fukuoka/',location:'博多スターレーン@その他'},
    {date:'2016-07-18',title:'6つ子の魂☆フォーエバー3',url:'http://www.youyou.co.jp/only/six/3/',location:'東京ビックサイト@東京'},
    {date:'2016-07-18',title:'いちから夏真っ盛り',url:'http://www.youyou.co.jp/only/six/ichikara_natu/',location:'東京ビッグサイト@東京'},
    {date:'2016-07-18',title:'末始終しあわせ届けまつ',url:'http://www.youyou.co.jp/only/six/sue/',location:'東京ビッグサイト@東京'},
    {date:'2016-07-18',title:'恋のおそチョROAD～ノンストップラブ～2',url:'http://www.youyou.co.jp/only/six/osotyo2/',location:'東京ビッグサイト@東京'},
    {date:'2016-07-18',title:'Fantasies6',url:'http://www.youyou.co.jp/only/six/fantasi/',location:'東京ビッグサイト@東京'},
    {date:'2016-07-24',title:'6つ子の魂☆フォーエバー 札幌2',url:'http://www.youyou.co.jp/only/six/sapporo2/',location:'つどーむ@その他'},
    {date:'2016-07-24',title:'6つ子の魂☆フォーエバー 仙台2',url:'http://www.youyou.co.jp/only/six/sendai2/',location:'夢メッセみやぎ@その他'},
    {date:'2016-07-31',title:'6つ子の魂☆フォーエバー 福岡3',url:'http://www.youyou.co.jp/only/six/fukuoka3/',location:'福岡国際会議場@その他'},
    {date:'2016-07-31',title:'6つ子の魂☆フォーエバー 金沢',url:'http://www.youyou.co.jp/only/six/kanazawa/',location:'金沢勤労者プラザ@その他'},
    {date:'2016-08-07',title:'チョロッとLOVE',url:'http://www.youyou.co.jp/only/six/tyoro/',location:'TRC@東京'},
    {date:'2016-08-21',title:'恋は絶好ちょうなんダ！',url:'http://www.youyou.co.jp/only/six/tyounan/',location:'都産台東@東京'},
    {date:'2016-08-28',title:'恋のHow to do',url:'http://www.youyou.co.jp/only/six/todo/',location:'TRC@東京'},
    {date:'2016-08-28',title:'6つ子の魂☆フォーエバー 松山',url:'http://www.youyou.co.jp/only/six/matuyama/',location:'アイテムえひめ@その他'},
    {date:'2016-08-28',title:'6つ子の魂☆フォーエバー 広島2',url:'http://www.youyou.co.jp/only/six/hirosima2/',location:'広島産業会館@その他'},
    {date:'2016-09-04',title:'オソろいの恋だカラ',url:'http://www.youyou.co.jp/only/six/osokara/',location:'都産台東@東京'},
    {date:'2016-09-11',title:'とりぷる方弟式 仙台',url:'http://www.youyou.co.jp/only/six/triple_sendai/',location:'仙台国際センター@その他'},
    {date:'2016-09-18',title:'あいいろカラーマッピング',url:'http://www.youyou.co.jp/only/six/karaichi/',location:'東京ビッグサイト@東京'},
    {date:'2016-09-18',title:'シェーパラ！～シェーパラダイス～',url:'http://www.youyou.co.jp/only/six/shee/',location:'東京ビッグサイト@東京'},
    {date:'2016-09-18',title:'6つ子の魂☆フォーエバー 札幌3',url:'http://www.youyou.co.jp/only/six/sapporo3/',location:'つどーむ@その他'},
    {date:'2016-09-19',title:'いちから真っ盛り2',url:'http://www.youyou.co.jp/only/six/ichikara2/',location:'東京ビッグサイト@東京'},
    {date:'2016-09-19',title:'6つ子の魂☆フォーエバー 沖縄2',url:'http://www.youyou.co.jp/only/six/okinawa2/',location:'沖縄コンベンションセンター@その他'},
    {date:'2016-09-25',title:'君カラ届いたLOVEレター2通目',url:'http://www.youyou.co.jp/only/six/karatodo2/',location:'TRC@東京'},
    {date:'2016-10-09',title:'6つ子の魂☆フォーエバー 名古屋2',url:'http://www.youyou.co.jp/only/six/nagoya2/',location:'ポートメッセなごや@その他'},
    {date:'2016-11-13',title:'6つ子の魂☆フォーエバー 仙台3',url:'http://www.youyou.co.jp/only/six/sendai3/',location:'夢メッセみやぎ@その他'},
    {date:'2016-12-11',title:'6つ子の魂☆フォーエバー 名古屋3',url:'http://www.youyou.co.jp/only/six/nagoya3/',location:'ポートメッセなごや@その他'},
    {date:'2016-12-18',title:'6つ子の魂☆フォーエバー4',url:'http://www.youyou.co.jp/only/six/4/',location:'東京ビッグサイト@東京'},
    {date:'2016-12-18',title:'6つ子の魂☆フォーエバー 広島3',url:'http://www.youyou.co.jp/only/six/hirosima3/',location:'広島市中小企業会館@その他'},
    {date:'2016-12-24',title:'6つ子の魂☆フォーエバー 福岡4',url:'http://www.youyou.co.jp/only/six/fukuoka4/',location:'福岡国際会議場@その他'},
    {date:'2016-12-25',title:'6つ子の魂☆フォーエバー 札幌4',url:'http://www.youyou.co.jp/only/six/sapporo4/',location:'札幌コンベンションセンター@その他'},
    {date:'2017-01-09',title:'6つ子の魂☆フォーエバー 沖縄3',url:'http://www.youyou.co.jp/only/six/okinawa3/',location:'沖縄コンベンションセンター@その他'}
  ];

  clndr = $('#full-clndr').clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true
  });

});
