"use strict";


console.log("News API data in the house");

let $ = require('jquery');

var url = "https://newsapi.org/v2/top-headlines?country=us&";
// var newsApiKey = "511e64b5fdc44764af3517769a250375";

let news = [];
let api_calls = {};

//  PH == jQuery xhr option works w/jquery cdn script in html \\

function outputNews (){
    console.
}


function newsAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

news = newsAPICall(url)
.then ((resolve) => {
    console.log("makeAPICall for top News Resolved", articles['0'].title); 

    // function outputNews(); // I want it to do this function
    },
    (reject) => {
        console.log("DOH! something went wrong");
    }
);

module.exports = { news };

