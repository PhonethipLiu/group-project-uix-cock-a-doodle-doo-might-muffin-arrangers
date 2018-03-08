"use strict";
console.log("meetups-set.js here");

let meetupData = require("./meetups-getter");

function showMeetups() {
    console.log("function meetups", meetupData);
}

var a = 0;



meetupData.getMeetup()
.then((data) => {
    console.log("GetMeetups with meetUps data", data);
});

module.exports = { a };

