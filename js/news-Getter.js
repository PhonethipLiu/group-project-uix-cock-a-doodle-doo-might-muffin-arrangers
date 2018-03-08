"use strict";

console.log("News API data in the house");

let $ = require('jquery');
// let outputNews = require('./news-Setter');

let news ={};
// let newsApiKey = require('./apikeys');
// let url = "https://newsapi.org/v2/top-headlines?country=us";
// let newsApiKey, url = require('./apikeys');
// var newsApiKey = "511e64b5fdc44764af3517769a250375";

var newsDiv = document.getElementById("news--div");
// console.log("targeting news div in dom", newsDiv);

//jQuery to put everything in an array
var populateNewsDiv = $("#news--list");
// console.log("what is in the populateNewDiv jquery", populateNewsDiv[0]);

///////// functions and calls ///////////


function outputNews(newsList) {
    console.log("what is this newArticle in the outputNews function", newsList);
    
    //parameter to make it runs if there is a newsArticles
    if (newsList.articles) {
        for (let i = 0; i < 10; i++) {
            var articles= newsList.articles;
            // console.log("topNewsArticle", newsList);
            // console.log("News data title:", articles[i].title + articles[i].description  + articles[i].source + articles[i].url );
            populateNewsDiv.append(`<li>
            <h4 class="list-headline"><a class="list-link" target="_blank" href="${articles[i].url}">${articles[i].title} </a> </h4>
            <p class="list-summary">${articles[i].description} </p>
            <footer class="list-footer"> Source: ${articles[i].source.name}</footer>
            <button id="save--article--btn" type="button" class="btn btn-light btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off" target="my--btn--news"> save article </button> </li>`);
            
        }
    }
}


function newsAPICall(url) {
    return $.ajax({
        url: url,
       newsApiKey: require('./apikeys'),
        // key: newsApiKey,
        dataType: "json"
    });
}


news = newsAPICall("https://newsapi.org/v2/top-headlines?country=us")
.then ((resolve) => {
    console.log("makeAPICall for top News Resolved", resolve); 
    outputNews(resolve); // I want it to do this function
    },
    (reject) => {
        console.log("DOH! something went wrong");
    }
);


module.exports = newsAPICall();
