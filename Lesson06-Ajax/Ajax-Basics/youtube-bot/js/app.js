/* *Youtube API JSON search */

$(document).ready( function() {
'use strict';
    $('button').click(function() {
        var query_term = $('#query').val();
        requestData(query_term);
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            var query_term = $('#query').val();
            requestData(query_term);
        }
    });

});

function requestData(query_term) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyBkZQUXkTK-aDsk_vQJKyLdc5KRMgL2ajE',
        q: query_term
    };
    var url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data){
        showResults(data.items);
    });
}

function showResults(data) {
    console.log(data);

    var results = '';
    $.each(data, function(index,value){
        var icon = '<i class=\'fa fa-youtube-play\'></i>';
        results += '<div class=\'thumb\'><a href=\'https://www.youtube.com/watch?v=' + value.id.videoId + '/\' target=\'_blank\'><img src=' + value.snippet.thumbnails.medium.url + '></a></div>' + '<div class=\'video-link\'>' + '<a href=\'https://www.youtube.com/watch?v=' + value.id.videoId + '/\' target=\'_blank\'>' + icon + '&nbsp;' + value.snippet.title + '</a></div>';
    });
    var results_node = $(results);
    $('#results').fadeOut(400, function() {
        $(this).find('div').remove();
        $(this).append(results_node);
        $(this).fadeIn(400);
    });

}
