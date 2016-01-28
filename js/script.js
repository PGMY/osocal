
// this will use clndr's default template, which you probably don't want.
$('#clndr').clndr();

// so instead, pass in your template as a string!
$('#clndr').clndr({
  template: $('#calendar-template').html()
});

// there are a lot of options. the rabbit hole is deep.
$('#clndr').clndr({
  template: $('#full-clndr-template').html(),
  events: [
    { date: '2016-01-28', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' }
  ],
  clickEvents: {
    click: function(target) {
      console.log(target);
    },
    onMonthChange: function(month) {
      console.log('you just went to ' + month.format('MMMM, YYYY'));
    }
  },
  doneRendering: function() {
    console.log('this would be a fine place to attach custom event handlers.');
  },
  forceSixRows: true
});
