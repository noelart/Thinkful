/* JQuery */
'use strict';

var listTemplate = function() {
  var newItem = $('input[name=checkListItem]').val();
  var template =
        '<div class="item">'
      + '  <div class="action">' + newItem + '</div>'
      + '   <div class="icons">'
      + '     <div class="done-button"><i class="fa fa-check-circle"></i></div>'
      + '     <div class="delete-button"><i class="fa fa-times-circle"></i></div>'
      + '   </div>'
      + '   <div class="clear"></div>'
      + '</div>';
  return $(template);
};


function addList() {
  $('.add-button').on('click', function() {
    $('.list').append(listTemplate());
  });
  /* since all divs are item I eed to find one*/
  $(document).on('click', '.delete-button', function() {
    $(this).closest('.item').remove();
  });
  $(document).on('click', '.done-button', function() {
    $(this).closest('.item').addClass('item-done');
  });
  $(document).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
     $('.list').append(listTemplate());
    }
  });
};

$(document).ready(function() {
  addList();
});