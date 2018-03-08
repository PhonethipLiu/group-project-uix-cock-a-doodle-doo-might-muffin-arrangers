"use strict";

let $ = require('jquery'),
firebase = require("./config");

// I want the user to get the news top 10 headlines from firebase
//  function getNewsData() === need to write this function
// function getNews(user) {
//     console.log("url", firebase.getFBsettings().databaseURL);
//     return $.ajax ({
//         url: `${firebase.getFBsettings().databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`
//     }).done( (getNewsData) => {
//         console.log("this function in promise", getNewsData);
//         return getNewsData;
//     });
// }

// **** this version is without user id ****** //
function getNews() {
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/xxxx.json`
    }).done( (getNewsData) => {
        console.log("this function in promise", getNewsData);
        return getNewsData;
    });
}

function editMyNews(newsFormObj) {
    console.log("editMyNews", newsFormObj);
    return $.ajax({
        url:`${firebase.getFBsettings().databaseURL}/xxxx.json`,
        type: "POST",
        data: JSON.stringify(newsFormObj),
        dataType: "json"
    });
}