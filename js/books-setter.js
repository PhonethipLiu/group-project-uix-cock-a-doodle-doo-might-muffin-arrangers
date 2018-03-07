"use strict";

const bookSearch = require("./books-getter");

bookSearch.booksGetter("The Lord Of")
.done((response) => {
    console.log("books-getter", response.docs);
    return response.docs;
});