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
    return $.ajax({  
        url: `${firebase.getFBsettings().databaseURL}/userInfo.json`,
        type: 'POST',   
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        console.log("what is the new id?", userID);
        return userID;
    });
}


module.exports= {addUser};