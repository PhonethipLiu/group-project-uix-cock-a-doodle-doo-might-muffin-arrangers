"use strict";

console.log("config.js here");  //Says it's here

let firebase = require("firebase/app"), //lets all these variables represent all that stuff
    fb = require("./apiKeys"),
    fbData = fb();  //what is this function??

require("firebase/auth");  //what is this requiring??
require("firebase/database");  //what is this requiring??

var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};


firebase.getFBsettings = function () {
    console.log("getFBsettings", config);
    return config;
};

firebase.initializeApp(config); //what is this function?
module.exports = firebase;