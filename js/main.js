"use strict";

console.log("main js here");

let $ = require('jquery');
let news = require("./news-Getter");
let meetUps = require('./meetups-getter');
let bookSearch = require("./books-getter");
let booklist = require("./books-setter");
let weather=require("./weather_load");
let setMeetups = require('./meetups-set');

// meetUps.getMeetup()
//     .then((data) => {
//         console.log("GetMeetups with meetUps data", data);
//     });

// var weather_load=require("./weather_load");

booklist.search.captureInput();
// var weather_load=require("./weather_load");

// var weather_load=require("./weather_load");
// let user = require("./user");
// let user = require("./user");