"use strict";

console.log("Hello time.js");

var meetupDateTime = require("./meetups-getter");

var currentDateTime = new Date();


var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var currentMonth = monthNames[currentDateTime.getMonth()];
var currentDate = currentDateTime.getDate();
var currentYear = currentDateTime.getFullYear();
var dateToday = currentMonth + " " + currentDate + ", " + currentYear;

var meetupMonth = monthNames[meetupDateTime.getMonth()];
var meetupDate = meetupDateTime.getDate();
var meetupYear = meetupDateTime.getFullYear();
var meetupStartTime = meetupMonth + " " + meetupDate + ", " + meetupYear;

module.exports = { dateToday, meetupStartTime };

