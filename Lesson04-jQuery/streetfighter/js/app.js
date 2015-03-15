/* jQuery Animation */

var width = $('html').width();

var startRyu = function() {
  $('.ryu').on('mouseenter', function() {
    $(this).find('.ryu-still').hide();
    $(this).find('.ryu-ready').show();
    })
  .on('mouseleave', function() {
    $(this).find('.ryu-still').show();
    $(this).find('.ryu-ready').hide();
    })
  .on('mousedown', function() {
/* play hadouken sound */
    playHadouken();
/* animate Ryu */
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().css('opacity', '0.5')
    .animate(
        {'left' : width, 'opacity' : '1.0'}, 1000, 'easeInCirc', function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '-160px');
        }
      );
  })
  .on('mouseup', function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  /* keyboard events */
  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playSax();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
};

/* Sound */
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playSax() {
/* Audio not playing as x is pressed but when released */
    $('#sax-sound')[0].load();
    $('#sax-sound')[0].play();
}

$(document).ready(function() {
  startRyu();
});