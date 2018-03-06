"use strict";

console.log("News API data in the house");


// // API key: 511e64b5fdc44764af3517769a250375 //

// // ***** code from News Api from https://newsapi.org/docs/get-started#top-headlines **** //

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&',
                
// apiKey = 'apiKey=511e64b5fdc44764af3517769a250375';

// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

// // ***** THIP code **** //

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
// //     promise.then( (restaurants) => {
// //         console.log(restaurants);
// //         return get("cities.json") ;
// //     }).then( (cities) => {
// //         console.log(cities);
// //     }).catch(function(error){
// //         console.log(error);






