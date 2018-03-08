"use strict";

console.log("config.js here");  //Says it's here


let firebase = require("firebase/app"),
    fb = require("./apiKeys"),
    fbData = fb();

require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};
firebase.initializeApp(config);

firebase.getFBsettings = function () {
    console.log("getFBsettings", config);
    return config;
};




module.exports = firebase;