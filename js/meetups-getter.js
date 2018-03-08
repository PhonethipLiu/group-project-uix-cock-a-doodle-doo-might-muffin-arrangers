"use strict";
console.log("ajax call");
let $ = require('jquery');

let apiKey = require("./apiKeys");


let data = "";

var theKey = apiKey.getKey();



function getMeetup(){
    console.log("theKey", theKey);
    let urlString = `${theKey.authDomain}/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=${theKey.meetupsApiKey}`;
    console.log("url string", urlString);
    return $.ajax({
        url: `${theKey.authDomain}/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=${theKey.meetupsApiKey}`
    });
}

window.onload = function setMeetups () {
    meetups

}


 // url: "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=742a785d27225b161f1072604e5e3a27"

module.exports = { getMeetup };