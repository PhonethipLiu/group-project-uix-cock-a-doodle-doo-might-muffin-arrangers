"use strict";

let $ = require("jquery");

// Link to books search API; no API key needed

let booksGetter = (query) => {
    let url = `https://openlibrary.org/search.json?title=${query}&limit=10`;
    return $.ajax({
    url: url,
    dataType: "json"
    });
};

module.exports = {booksGetter};