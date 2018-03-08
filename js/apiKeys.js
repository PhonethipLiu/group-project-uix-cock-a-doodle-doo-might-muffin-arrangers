"use strict";

// function getKey() {
//     // return {
//     //     apiKey: "AIzaSyCpmNCJ0BDy5sAlnNc7QnAn9l6zBxtPXfQ",
//     //     authDomain: "music-history-d24.firebaseapp.com",
//     //     databaseURL: "https://music-history-d24.firebaseio.com"
//     // };
// }


let meetupsAPI = "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=742a785d27225b161f1072604e5e3a27";


function getKey() {
    return {
        meetupsApiKey: "742a785d27225b161f1072604e5e3a27",
        authDomain: "https://api.meetup.com",
        databaseURL: "https://mighty-muffin-avengers.firebaseio.com/",
        fbWebApiKey: "AIzaSyBMVc4fH_p-3aJfxx3En0kdzvNxrssHu6A"
    };
}

module.exports = { meetupsAPI, getKey };
