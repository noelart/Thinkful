/* hot or cold javascript */
$(document).ready(function() {
'use strict';

  var random = null;
  var count = 0;
  var array = [];

  function newGame() {
          $('#feedback').text('Make your Guess!');
          $('input[name=userGuess]').empty();

          random = (Math.floor(Math.random() * 100) + 1 );
          console.log(random);
  }

/* Initiate new game */
  $('.new').on('click', newGame);

  function guessButtonClicked() {

        var guess = parseInt($('input[name=userGuess]').val());
        count++;
        $('#count').text(count);
        console.log(count);
        var string = '';

        guessListItem();

    function guessListItem() {
    array.push(guess);
    console.log(array.length);
    var $guessListItem = $('<li><span>' + array[array.length-1] + '</span>' + '<div class="base">&nbsp;</div>' + '</li>');
        if (array.length >= 10) {
          $('#guessList li:eq(0)').remove();
          $('#guessList').append($guessListItem);
        } else {
          $('#guessList').append($guessListItem);
        }
  }

        switch (true) {
          case (random === guess):
            string = 'Congratulations you nailed it';
            break;
          case (Math.abs(random - guess) <= 5 ):
            string = 'You\'re very close';
            break;
          case ((Math.abs(random - guess) > 5) && (Math.abs(random - guess) <= 15)):
            string = 'You\'re getting much closer';
            break;
          case ((Math.abs(random - guess) > 15) && (Math.abs(random - guess) <= 35)):
            string = 'You\'re closer';
            break;
          case ((Math.abs(random - guess) > 35) && (Math.abs(random - guess) <= 55)):
            string = 'You\'re far away';
            break;
          case ((Math.abs(random - guess) > 55) && (Math.abs(random - guess) <= 75)):
            string = 'You\'re very far away';
            break;
          case ((Math.abs(random - guess) > 75) && (Math.abs(random - guess) <= 100)):
            string = 'You\'re absolutely far away';
            break;
          default :
            string = 'Better luck next time';
          }
    console.log(string);
    return $('#feedback').empty().text(string);
  }

  $('#guessButton').on('click', function(event) {
    event.preventDefault();
    guessButtonClicked();
  });

  $(document).keydown(function(event) {
    if (event.keycode == 13) {
      event.preventDefault();
      guessButtonClicked();
    }
  });

/* Modal object */
  function modal() {
    /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });
  }

  newGame();

});

