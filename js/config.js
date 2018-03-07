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


firebase.getFBsettings = function () {
    console.log("getFBsettings", config);
    return config;
};

firebase.initializeApp(config);



module.exports = firebase;