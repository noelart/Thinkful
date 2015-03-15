/* FizzBuzz javascript */
'use strict';

/* Fizzbuzz logic */
function fizzbuzz() {
  var fizz = 'Fizz';
  var buzz = 'Buzz';
  var array = [];
  var string = null;

  for (var i = 1; i <= 100; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
      string = fizz + buzz;
      array.push(string);
      addItemList(string);
    } else if (i%3 === 0) {
      string = fizz;
      array.push(string);
      addItemList(string);
    } else if (i%5 === 0) {
      string = buzz;
      array.push(string);
      addItemList(string);
    } else {
      array.push(i);
      addItemList(i);
    }
  }
  /*return array;*/
}

var addItemList = function(string) {
  var $item = $('<div class=\'string-container\'>' + string + '</div>');
  $('.list').append($item);
};

$(document).on('ready', function() {
  $('.start-button').on('click', function(){
    fizzbuzz();
  });
});