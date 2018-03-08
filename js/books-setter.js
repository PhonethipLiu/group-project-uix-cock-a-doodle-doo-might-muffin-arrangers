"use strict";

// Gets API call from "books-getter.js"
const bookQuery = require("./books-getter");

let search = {};

search.captureInput = () => {
    // Grabs the "search-bar" div
    const bookSearchBar = document.getElementById("search-bar");
    bookSearchBar.addEventListener("keyup", function(e) {
        if (e.keyCode === 13 && e.target.value != "")  {
    // Takes user input and inserts it into a regular expression
            let userInput = e.target.value.toLowerCase();
            console.log(userInput);
            bookSearch(userInput);
        } else if (e.keyCode === 13) {
                window.alert("Please enter something to search for.");
        }
    });
};

// From the API Call, get the data and search through it for matches to the parameter passed into it...
let bookSearch = (userInput) => {
    bookQuery.booksGetter(userInput)
    // and return the response once it is done
    .then((response) => {
        let bookResponse = response;
        bookDisplay(bookResponse.docs);
    });
};

let bookDisplay = (arrayBooks) => {
    console.log(arrayBooks);
    let searchResult = "";
    for (let i = 0; i < arrayBooks.length; i++) {
        searchResult += `<img src="${arrayBooks[i].cover_i}"><img>`;
        searchResult += `<h1>${arrayBooks[i].title}</h1>`;
        searchResult += '<h3 class="lead text-info">By: ' + arrayBooks[i].author_name + '</h3>';
        searchResult += '<p class="lead text-info">Published: ' + arrayBooks[i].first_publish_year + '</p>';
    }
    // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
    document.getElementById('search-results').innerHTML = searchResult;
};

module.exports = {bookSearch, search};