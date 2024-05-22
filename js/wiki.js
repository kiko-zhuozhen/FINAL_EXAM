document.addEventListener('DOMContentLoaded', function(){
    searchWikipedia("Earth");
});

function searchWikipedia(searchQuery) {
    const url = new URL("https://en.wikipedia.org/w/api.php");

    const params = {
        action: "query",
        list: "search",
        srsearch: searchQuery,
        format: "json",
        origin: "*" // 用于绕过跨域问题的参数
    };

    // 添加参数到URL中
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.query.search);
            displayResults(data.query.search);
        })
        .catch(error => console.error('Error fetching data:', error));
};

function displayResults(results) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.snippet}</p>
            <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read more...</a>
        `;
        resultElement.style.marginTop = '20px';
        container.appendChild(resultElement);
    });
};
