"use strict";

console.log("main js here");
<<<<<<< HEAD
var weather_load=require("./weather_load");
=======


// API key: 511e64b5fdc44764af3517769a250375 //

// ***** code from News Api from https://newsapi.org/docs/get-started#top-headlines **** //

// this code works also but grunt doesn't like that Request is not defined //

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&'+ 'apiKey=511e64b5fdc44764af3517769a250375';

var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    });


// ***** THIP code that works **** //

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

// PH == jQuery option //

>>>>>>> d06266cfb4a37019a9960b4884b8d5bdc827f9cc
