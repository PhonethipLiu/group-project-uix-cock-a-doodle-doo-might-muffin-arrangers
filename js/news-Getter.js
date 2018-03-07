"use strict";


console.log("News API data in the house");

let $ = require('jquery');

let news = {};

var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=511e64b5fdc44764af3517769a250375&limit=10";
// var newsApiKey = "511e64b5fdc44764af3517769a250375&limit=10";

var newsDiv = document.getElementById("news--div");
console.log("targeting news div in dom", newsDiv);

//jQuery to put everything in an array
var populateNewsDiv = $("#news--list");
console.log("what is in the populateNewDiv jquery", populateNewsDiv[0]);

function outputNews(newsList) {
    console.log("what is this newArticle in the outputNews function", newsList);
    
    //parameter to make it runs if there is a newsArticles
    if (newsList.articles) {
        for (let i = 0; i < 10; i++) {
            var articles= newsList.articles;
            console.log("topNewsArticle", newsList);
            console.log("News data title:", articles[i].title + articles[i].description  + articles[i].source + articles[i].url );
            populateNewsDiv.append(`<li class="list">
            <h4 class="news-headline">${articles[i].title}</h4>
            <p>${articles[i].description}</p>
            <footer class="news-footer"> Source: ${articles[i].source.name}</footer>
            <a target="_blank" href="${articles[i].url}"> Read the article </a></li>`);
            
        }
    }
}


function newsAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

news = newsAPICall(url)
.then ((resolve) => {
    console.log("makeAPICall for top News Resolved", resolve); 
    outputNews(resolve); // I want it to do this function
    },
    (reject) => {
        console.log("DOH! something went wrong");
    }
);

module.exports = { news };
