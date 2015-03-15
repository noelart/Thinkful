/* jQuery */
var bookingPanel = function() {
  var $price = $('<span>From $399</span>');
  var $contact = $('<span class="details">Special price' + $price +'</span>');
  $('.book').hover(function() {
  $(this).after($contact);
  });
};

var buttonClicked = function() {
  var $confirmedBooking = $('<button class="book-clicked">Call 1-555-jquery-air</button>');
  $('.book-button').on('click', function() {
    $(this).remove();
    $('.click-button').append($confirmedBooking);
  });
};

var oneButtonClicked =function() {
  $('.tour').on('click', function() {
     var $confirmedBooking = $('<span>Call 1-555-jquery-air</span>');
    $(this).closest('.tour').append($confirmedBooking);
    $(this).find('button').remove();
  });
};

var oneButtonReplaced = function() {
  $('.vacation').on('click', function() {
    var $newButton = $('<button class="book-clicked">Call 1-555-jquery-air</button>');
    $(this).find('button').remove();
    $(this).closest('.vacation').append($newButton);
  });
};

$(document).ready(function() {
  bookingPanel();
  buttonClicked();
  oneButtonClicked();
  oneButtonReplaced();
});