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
