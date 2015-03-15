/* jQuery */

var $contact = $('<span>Call 1-555-jquery-air to book tour</span>');
var $price = $('<p>From $399</p>');
var bookingPanel = function() {
  $('.book').hover(function() {
  $('.one-third-col').append($contact);
    });
  $('.book').click(function() {
    $(this).remove($contact);
    $('.one-third-col').append($price);
  });
};


$(document).ready(function() {
  $('.price').text('$100');
  /*descendent selector*/
  $('#destinations li').css({'text-transform' : 'uppercase', 'color' : '#8E001C'});
  /*child selector*/
  $('#second-destinations > li').css({'list-style' : 'none'});
  /*Multiple selectors*/
  $('#france, .promo').css({'color' : '#008800', 'font-weight' : 'bold'});
  /* first and last child pseudo elements */
  $('.modes li:first, .modes li:last').css({'color' : '#CC2244'});
  $('.modes li:odd').css({'font-weight' : 'bold', 'border' : '1px solid #222222', 'width' : '80px'});

  /* Traversing */
  $('.routes li').first().css({'color' : '#CC2244'});
  $('.routes li').last().prev().css({'color' : '#008800'});
  $('.routes').parent().prev().css({'list-style' : 'none', 'text-transform' : 'uppercase'});

  /*  Traversing with .find()*/
  $('.sports').find('li').css({'background' : '#CC2244', 'color' : '#FFF', 'display' : 'inline-block', 'padding' : '0.2em'});

  bookingPanel();

});