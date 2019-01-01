function getPublications(authId, callback) {
    var url = 'https://api.semanticscholar.org/v1/author/' + authId;
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        async: true,
        success: callback
    });
}

function callback(result) {
    // Create the container with the author name
    var container = '<div class="column col-12" id="' + result.authorId + '"><h3 class="border-bottom">' + result.name + '</h3>';

    // paperId, title, url, year
    var papers = result.papers;

    // Sort papers
    papers.sort(function(a, b) {
        return b.year - a.year;
    });

    container += '<ul class="paper-list">';
    // For each paper, create a card
    $.each(papers, function(i, paper) {
        container += '<li><a href="' + paper.url + '">' + paper.title + ', <strong>' + paper.year + '</strong></a></li>';
    });

    container += '</ul></div>';
    $('#publications').append(container + '<br /><br />');
}

$(function() {
    // List of SemanticScholar author ID numbers
    // Nagaraja, Terzis, Irvine, Weir, Atkinson, Atkey
    var ids = {
        "nagaraja": 2533041,
        "terzis": 2166856,
        "irvine": 4956130,
        "weir": 2727307,
        "atkinson": 34911160,
        "atkey": 2953686
    };

    // Iterate over id numbers
    $.each(ids, function(k, v) {
        // Parse publication list into HTML
        // using callback function
        getPublications(v, callback);
    });
});
