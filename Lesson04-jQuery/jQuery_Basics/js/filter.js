/* jQuery */

var buttonClicked = function() {
  $('.vacation').on('click', 'button', function() {
    var $vacation = $(this).closest('.vacation');
    var $amount = $vacation.data('price');
    //copies price value from data-price attribute in html
    var $priceButton = $('<button class="book-clicked">From $' +$amount + '</button>');
    $vacation.append($priceButton);
    $(this).remove();
     console.log($amount);
  });
};

var filterOnSale = function() {
  $('#filters').on('click', '.onsale-filter', function() {
    var $onSale = $('.vacation').filter('.onsale');
    $('.highlighted').removeClass('highlighted');
    $onSale.addClass('highlighted');
  });
};

var filterExpiring = function() {
  $('#filters').on('click', '.expiring-filter', function() {
    var $expiring = $('.vacation').filter('.expiring');
    $('.highlighted').removeClass('highlighted');
    $expiring.addClass('highlighted');
  });
};

if (document.URL.match(/\/filtering.html/)) {
  $(document).ready(function() {
    buttonClicked();
    filterOnSale();
    filterExpiring();
  });
}