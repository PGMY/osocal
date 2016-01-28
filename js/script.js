var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
    { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
    { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
    { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
    { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
  ];

  clndr = $('#clndr').clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true,
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
    }
  });
});

// // this will use clndr's default template, which you probably don't want.
// $('#clndr').clndr();
//
// // so instead, pass in your template as a string!
// $('#clndr').clndr({
//   template: $('#calendar-template').html()
// });
//
// // there are a lot of options. the rabbit hole is deep.
// $('#clndr').clndr({
//   template: $('#full-clndr-template').html(),
//   events: [
//     { date: '2016-01-28', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' }
//   ],
//   clickEvents: {
//     click: function(target) {
//       console.log(target);
//     },
//     onMonthChange: function(month) {
//       console.log('you just went to ' + month.format('MMMM, YYYY'));
//     }
//   },
//   doneRendering: function() {
//     console.log('this would be a fine place to attach custom event handlers.');
//   },
//   forceSixRows: true
// });
