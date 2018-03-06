"use strict";

// Link to books search API; no API key needed
const url = "https://openlibrary.org/dev/docs/api/search.json";

let booksGetter = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url
        })
        .done(data => {
            resolve(data);
        })
        .fail(error => {
            reject(error);
        });
    });
};

booksGetter()
.then((response) => {
    console.log(response);
});

module.export = {booksGetter};
console.log("booksGetter.js is in the haus!");