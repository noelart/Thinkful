/* jquery */

var priceEntry = function() {
  $('.vacation').on('keyup', '.quantity', function() {

    //Get the price for vacation
    var $price = +$(this).closest('.vacation').data('price');
    //Get the quantity user entered
    var $quantity = +$(this).val();
    //total
    $('#total').text($price * $quantity);
    console.log($quantity * $price);
  });
};

var priceTotal = function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#total").text(nights * dailyPrice);
    $("#nights-count").text($(this).val());
  });
  $("#nights").on("focus", function() {
  $(this).val(7);
  });
};

if (document.URL.match(/\/keyboard_events.html/)) {
  $(document).ready(function(){
    priceEntry();
    priceTotal();
  });
};

