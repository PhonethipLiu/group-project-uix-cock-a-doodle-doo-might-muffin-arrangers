"use strict";

let $ = require('jquery'),
firebase = require("./config");
var myArticles = require("./news-Getter");
var saveArticle = Object.assign({}, myArticles) ; // want to target the news article/object that is displayed here

let button; //= $(`#save--article--btn-${i]}`);
var myNews =[];

myArticles = (userInput) => {
    

//    myArticles.newsAPICall()
    // console.log("myArticles", myArticles);
    .then((response) => {
        let savedNews = response;
        console.log("saved News:", savedNews.myArticles);
    }).then(() => {
        
            clickAddToBookshelf(button);
            console.log(savedNews);
        }
    );
};
//save object to another array
function clickSaveMyArticle(button) {
    $(button).on("click", (event) => {
        console.log("button");
        // let saveNews = Object.assign({}, obj);
        let saveNews = {};
        saveNews.title = event.tagert.parentNode.childNodes[0].innerText;
        saveNews.title = event.tagert.parentNode.childNodes[1].innerText;
        saveNews.title = event.tagert.parentNode.childNodes[2].innerText;
        myNews.push(saveNews);
    });
}

button.on("click", (event) => {
    console.log("button:", button);
    saveArticle.assign();
});

// function saveMyArticle(user){
 
// }


// From the API Call, get the data and search through it for matches to the parameter passed into it...



function clickAddToBookshelf(button) {
    $(button).on("click", (e) => {
        alert("You added a book!");
    });
}


// I want the user to get the news top 10 headlines from firebase
//  function getNewsData() === need to write this function

function getNews(user) {
    console.log("url", firebase.getFBsettings().databaseURL);
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/news.json?orderBy="uid"&equalTo="${user}"`
    }).done( (getNewsData) => {
        console.log("this function in promise", getNewsData);
        return getNewsData;
    });
}


// **** this version is without user id ****** //
// function getNews() {
//     return $.ajax ({
//         url: `${firebase.getFBsettings().databaseURL}/news.json`
//     }).done( (myArticles) => {
//         console.log("this function in promise", myArticles);
//         return myArticles;
//     });
// }

// this should be adding the save item to a firebase 
function addSaveNews(newSavedObj) {
    console.log("editMyNews",newSavedObj);
    return $.ajax({
        url:`${firebase.getFBsettings().databaseURL}/news.json`,
        type: "POST",
        data: JSON.stringify(newSavedObj),
        dataType: "json"
    }).done( (newsId) => {
        console.log("what is newsId:", newsId);
        return newsId;
    });
   
}
// function addSaveNews(newsFormObj) {
//     console.log("addSaveNews", newsFormObj);
//     return $.ajax({
//         url:`${firebase.getFBsettings().databaseURL}/news.json`,
//         type: "POST",
//         data: JSON.stringify(newsFormObj),
//         dataType: "json"
//     }).done( (newsId) => {
//         console.log("what is newsID:", newsId);
//         return newsId;
//     });
   
// }

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

