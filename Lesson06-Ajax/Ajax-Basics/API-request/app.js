/* API request */

$(document).on('ready', function() {
  'use strict';

  $('.button').on('click', function() {
    $.getJSON('http://omdbapi.com/?s=Star%20Wars&r=json',
              function(data) {
                var selection = data.Search[0].Title;
                var result = $('<p>' + selection + '</p>');
                $('.output').append(result);
                console.log(data);
              });
  });

  $('.button-list').on('click', function() {
    $.getJSON('http://omdbapi.com/?s=Star%20Wars&r=json',
              function(data) {
                var selection = data.Search;
                $.each(selection, function(index, value) {
                  $('.list-all').append('<p>' + value.Title + '</p>');
                });
              });
  });
});