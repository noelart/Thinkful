/* Using getJSON function */

$(document).ready(function() {
  'use strict';

  $(function() {
    $.getJSON('http://omdbapi.com/?s=There%20Will%20Be%20Blood&r=json',
              function(data) {
                console.log(data);
              });
  });
});