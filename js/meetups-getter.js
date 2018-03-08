"use strict";
console.log("ajax call");
let $ = require('jquery');

let apiKey = require("./apiKeys");
let data = "";
var theKey = apiKey.getKey();

function getMeetup(){
    // console.log("theKey", theKey);
    let urlString = `${theKey.authDomain}/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=${theKey.meetupsApiKey}`;
    // console.log("url string", urlString);
    return $.ajax({
        url: `${theKey.authDomain}/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=${theKey.meetupsApiKey}`
    });
}

//

function createMeetupCards (events) {
    // return new Promise(function(resolve, reject) {
        let meetupItem = {
            local_time: events ? events.local_time : "",
            local_date: events ? events.local_date : "",
            link: events ? events.link : "",
            name: events ? events.name : "",
            id: events ? events.id : "",
            meetupBtnText: events ? "save meetup" : "save meetup",
            MeetupBtnId: events ? "save_edit_btn" : "save_new_btn"
     };
   let form =
       `<h4 class="list-headline"><a href=${events.link}>"${meetupItem.name}</a></h4>
      <date>${events.local_date}</date>
      <time>${events.local_time}</time></br>
      <button id="${events.id}" class=${meetupItem.meetupBtnId}>${meetupItem.meetupBtnText}</button>`;
        // resolve(form);
        return form;
    // });
}

 // url: "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=742a785d27225b161f1072604e5e3a27"

module.exports = { getMeetup, createMeetupCards };