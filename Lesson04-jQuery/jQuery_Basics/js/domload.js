/*jQuery*/

function showTicket() {
   $(this).closest('.confirmation').find('.ticket').slideDown();
 }

function hoverTicket() {
  $(this).closest('.confirmation').find('.ticket').slideToggle();
 };

function slidePhotos() {
  $(this).find('span').slideToggle();
}

var showPhotos = function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', slidePhotos)
              .on('mouseleave', 'li', slidePhotos);
};

var hoverOverIcon = function() {
  $('.confirmation').on('mouseenter', 'h2', hoverTicket)
                    .on('mouseleave', 'h2', hoverTicket);
  $('.confirmation').on('click', 'button', showTicket);
};

if (document.URL.match(/\/events.html/)) {
  $(document).ready(function() {
    showPhotos();
    hoverOverIcon();
  });
}