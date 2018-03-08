"use strict";

// function getKey() {
//     // return {
//     //     apiKey: "AIzaSyCpmNCJ0BDy5sAlnNc7QnAn9l6zBxtPXfQ",
//     //     authDomain: "music-history-d24.firebaseapp.com",
//     //     databaseURL: "https://music-history-d24.firebaseio.com"
//     // };
// }

// module.exports = getKey;

////// * PH API key for news * /////

function getNewsKey(){
    return{
        apiKey: "511e64b5fdc44764af3517769a250375",
        // authDomain: "https://mighty-muffin-avengers.firebaseio.com",
        databaseURL: "https://newsapi.org/v2/top-headlines?country=us"
    };
}

module.exports = getNewsKey;