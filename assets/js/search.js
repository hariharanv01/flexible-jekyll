var searchElem = '<article class="post"><a class="post-thumbnail" style="background-image: url(/assets/img/{img})" href="{url}"></a><div class="post-content"><h2 class="post-title"><a href="{url}">{title}</a></h2> <p>{desc}</p><span class="post-date">{date}</span></div></article>'

var m_names = ["January", "February", "March",
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

var search = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results-container'),
    json: '/search.json',
    limit: 10,
    searchResultTemplate: searchElem,
    templateMiddleware: function (prop, value, template) {
        if (prop === 'date' && value) {
            var date = new Date(value);
            return date.getFullYear() + ', ' + m_names[date.getMonth()] + ' ' + date.getDate();
        }
    },
    callback: function (query, results) {
        if (query && query.length > 0) {
            document.getElementById('content-container').style.display = 'none';
        } else {
            document.getElementById('content-container').style.display = 'block';
        }
    }
});

