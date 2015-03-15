/* jQuery */

var showComments = function() {
  $('.vacation').on('click', '.expand', function(event) {
    event.preventDefault();
    $(this).closest('.vacation')
           .find('.comments')
           .fadeToggle();
  });
};

var stopAlert = function() {
  $('.expand-noalert').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.vacation')
            .find('.comments')
            .fadeToggle();
  });
   $(".tour").on("click", function() {
    alert("This should not be called");
  });
};


if (document.URL.match(/\/link_layover.html/)) {
  $(document).ready(function() {
    showComments();
    stopAlert();
  });
};