"use strict";

let $ = require('jquery'),
firebase = require("./config");

// I want the user to get the news top 10 headlines from firebase
//  function getNewsData() === need to write this function
// function getNews(user) {
//     console.log("url", firebase.getFBsettings().databaseURL);
//     return $.ajax ({
//         url: `${firebase.getFBsettings().databaseURL}/news.json?orderBy="uid"&equalTo="${user}"`
//     }).done( (getNewsData) => {
//         console.log("this function in promise", getNewsData);
//         return getNewsData;
//     });
// }

// **** this version is without user id ****** //
function getNews() {
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/news.json`
    }).done( (getNewsData) => {
        console.log("this function in promise", getNewsData);
        return getNewsData;
    });
}

function addSaveNews(newsFormObj) {
    console.log("editMyNews", newsFormObj);
    return $.ajax({
        url:`${firebase.getFBsettings().databaseURL}/news.json`,
        type: "POST",
        data: JSON.stringify(newsFormObj),
        dataType: "json"
    }).done( (newsId) => {
        console.log("what is newsID:", newsId);
        return newsId;
    });
   
}

function deleteSaveNews(newsId){
    $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/news/${newsId}.json`,
        method: "DELETE"
    }).done ( (newsData) => {
        console.log("what is newsData:", newsData);
        return newsData;
    });
}

function getMyNews(newsId){
    $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/news/${newsId}.json`,
    }).done ( (newsData) => {
        console.log("what is newsData:", newsData);
        return newsData;
    }).fail( (error) => {
        return error;
    });
}

function editMyNews(newsFormObj, newsId) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/news/${newsId}.json`,
        type: "PUT",
        data: JSON.stringify(newsFormObj)
    }).done( (newsdata) => {
        return newsdata;
    });
}

module.exports = { 
    getNews, 
    addSaveNews, 
    deleteSaveNews, 
    getMyNews, 
    editMyNews
};

