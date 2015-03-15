/* jQuery */

var showPhotos = function() {
  $(".vacation").on("mouseenter", function() {
    $(this).addClass('highlight');
    $(this).find(".image").show();
  }).on("mouseleave", function() {
    $(this).removeClass('highlight');
    $(this).find(".image").hide();
  });
};

var animatePanels = function() {
  $('#tours').on('click', '.vacation', function() {
    $(this).toggleClass('highlight');
    if($(this).hasClass('highlight')) {
      $(this).animate({'left' : '10px'}, fast);
    } else {
      $(this).animate({'left' : '0px'}, fast);
    }
  });
};

if (document.URL.match(/\/css_styles.html/)) {
  $(document).ready(function() {
    showPhotos();
    animatePanels();
  });
}