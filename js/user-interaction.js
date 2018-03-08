"use strict";

let $ = require('jquery'),
    news = require("./news-Getter"),
    meetup = require('./ajaxCall'),
    bookSearch = require("./books-getter"),
    weather = require("./weather_load"),
    user = require("./user"),
    DOMbuild = require("./add_user"),
    firebase = require("./config");
   


function addUser(userObj) {
    console.log("add user to firebase", userObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userInfo.json`,
        type: 'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}


module.exports= {addUser};