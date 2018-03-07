"use strict";

console.log("News API data in the house");

let $ = require('jquery');

var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=511e64b5fdc44764af3517769a250375";


let news = [];
let api_calls = {};

//  PH == jQuery xhr option works w/jquery cdn script in html \\

function newsAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

news = newsAPICall(url)
.then ((resolve) => {
    console.log("makeAPICall for top News Resolved", resolve);  
    },
    (reject) => {
        console.log("DOH! something went wrong");
    }
);


// ***** THIP code that works **** //

////// * PH API key for news * /////

// function getNewsKey (){
//     return{
//         apiKey: "apiKey=511e64b5fdc44764af3517769a250375",
//         authDomain: "",
//         databaseURL: ""
//     };
// }

// module.exports = getNewsKey


//////////// PH === this Promise function and code works \\\\\\\\\\\\\\\


// var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=511e64b5fdc44764af3517769a250375";

// let news = [];
// let api_calls = {};

// function get(url){
//     return new Promise ( (resolve, reject) => {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url);

//         xhr.onload = function() {
//             if (xhr.status == 200){
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(Error(xhr.statusText));
//             }
//         };
//         // handles network errors
//         xhr.onerror = function(){
//             reject(Error(xhr.statusText));
//         };
//         //make request
//         xhr.send();
//     });    
// }

// var promise = get(url);
//     promise.then( (news) => {
//         console.log("what is news?", news);
//     }).catch(function(error){
//         console.log(error);
//     });

// module.exports = { get(), promise };

module.exports = { news };