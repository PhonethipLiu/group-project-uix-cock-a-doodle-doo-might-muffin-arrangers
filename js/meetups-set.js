"use strict";
console.log("meetups-set.js here");

let meetupData = require("./meetups-getter");

meetupData.getMeetup()
.then((data) => {
    makeMeetupList(data);
});

let makeMeetupList = (data) => {
    let meetupListDiv = document.createElement("div");
    meetupListDiv.setAttribute("id", "meetupListDiv");
    console.log("GetMeetups with meetUps data", data.events);
    meetupListDiv.innerHTML = data.events.map(meetupData.createMeetupCards);
    document.getElementById("meetups--div").appendChild(meetupListDiv);
};

module.exports = {  };

