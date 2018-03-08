"use strict";


var $= require('jquery');
var news = require("./news-Getter");
var meetup = require('./ajaxCall');
var bookSearch = require("./books-getter");
var weather = require("./weather_load");
var user = require("./user");
var firebase = require("./config");



function buildUserObj(UID) {
    let userObj = {
        // email: .email,
        // fullName: .value,
        zipCode: "",
        uid: user.getUser()
    };
    return userObj;
}

module.exports = { buildUserObj };