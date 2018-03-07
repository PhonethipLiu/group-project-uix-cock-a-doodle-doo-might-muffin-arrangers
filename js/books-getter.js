"use strict";

let $ = require("jquery");

// Link to books search API; no API key needed
const url = "https://openlibrary.org/dev/docs/api/search.json";

let booksGetter = () => {
    return $.ajax({
    url: url
    });
};

booksGetter()
.then((response) => {
    console.log(response);
});

module.export = {booksGetter};
console.log("booksGetter.js is in the haus!");