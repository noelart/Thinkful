/* FizzBuzz javascript */
'use strict';

/* Fizzbuzz logic */
function fizzbuzz() {
  var fizz = 'Fizz';
  var buzz = 'Buzz';
  var array = [];
  var value = parseInt($('input[name=maxValue]').val());

  function addItemList(string) {
  var $item = $('<div class=\'string-container\'>' + string + '</div>');
  $('.list').append($item);
  }

  function check(num) {
    var string = '';
    if (num % 3 === 0) { string += fizz; }
    if (num % 5 === 0) { string += buzz; }
    return string || num;
  }

  function loop() {
  for(var i = 1; i <= value; i++) {
    addItemList(check(i));
    array.push(check(i));
    }
    return console.log(array);
  }

  if ((isNaN(value)) || (value < 1) || (value > 150)) {
    alert('Please enter a number greater than 0 and less than 150');
    } else {
    loop();
    }
}

/* FizzBuzz button pressed or textfield enter pressed*/
function startFizzbuzz() {
  $('.start-button').on('click', function(){
    getList();
  });

  $(document).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      getList();
    }
  });

  function getList() {
    $('.list').empty();
    fizzbuzz();
  }
}

$(document).on('ready', function() {
  startFizzbuzz();
});