const url = prompt("Set url here:");

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString.indexOf('?') != -1 ? queryString.substr(queryString.indexOf('?')+1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

console.log(parseQuery(url))