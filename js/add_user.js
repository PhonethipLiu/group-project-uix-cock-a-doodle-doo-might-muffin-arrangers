"use strict";


var $= require('jquery');
var news = require("./news-Getter");
var meetup = require('./ajaxCall');
var bookSearch = require("./books-getter");
var weather = require("./weather_load");
var user = require("./user");
var firebase = require("./config");




function addUser(use) {
    // console.log("addUser", userObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/users.json`,
        type: 'POST',
        data: JSON.stringify(use),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}

let hideLogButtons = (currentUser) => {
    // console.log('hideLogButtons function started');
    if (currentUser !== null) {
        $('#login').attr('hidden', true);
        $('#logout').removeAttr('hidden', true);
    } else if (currentUser === null) {
        // console.log('hiding logout button');
        $('#logout').attr('hidden', true);
        $('#login').removeAttr('hidden', true);
    }
    // console.log('hideLogButtons function ended');

};



module.exports = { addUser, hideLogButtons };