"use strict";

// Gets API call from "books-getter.js"
const bookQuery = require("./books-getter");

// Sets up "search" as an empty object
let search = {};

// This function captures the value typed into the search bar once the "enter" key is pressed
search.captureInput = () => {
    // Grabs the "search-bar" element
    const bookSearchBar = document.getElementById("search-bar");
    bookSearchBar.addEventListener("keyup", function(e) {
        if (e.keyCode === 13 && e.target.value != "")  {
    // Takes user input and makes it lowercase
            let userInput = e.target.value.toLowerCase();
            // Console logs whatever the user types in
            console.log("User input for book search:", userInput);
            bookSearch(userInput);
        // If the "enter" key is pressed, but there is no value entered, an alert is triggered
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

// This builds the list of books with their title, author, and the published year
let bookDisplay = (arrayBooks) => {
    // Console logs the array of books returned from the search
    console.log("Returned array of book search results", arrayBooks);
    let searchResult = "";
    for (let i = 0; i < arrayBooks.length; i++) {
        // Adds thumbnail image of book cover; takes too long to load & sometimes returns no image at all
        // if (arrayBooks[i].isbn) {
        //     let bookThumbnail = arrayBooks[i].isbn[0];
        //     searchResult += `<img src="http://covers.openlibrary.org/b/isbn/${bookThumbnail}-S.jpg" alt="book cover thumbnail image">`;
        // }
        searchResult += `<h4 class="list-headline">${arrayBooks[i].title}</h4>`;
        searchResult += `<p class="list-summary">By: ${arrayBooks[i].author_name}</p>`;
        searchResult += `<footer class="list-footer">Published: ${arrayBooks[i].first_publish_year}</footer>`;
        searchResult += `<button id="save--article--btn" type="button" class="btn btn-light btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off" target="my--btn--news">Add to Bookshelf</button>`;
    }
    // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
    document.getElementById('search-results').innerHTML = searchResult;
};

module.exports = {bookSearch, search};