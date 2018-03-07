"use strict";
// console.log("ajax call");
let $ = require('jquery'),
 firebase = require("./config"),
    user = require("./user"),
    db=require("./apiKeys");

function addUser(userObj) {
    console.log("addUser", userObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/users.json`,
        type: 'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}
module.exports=addUser;