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

// fetch(url)
//     .then((response) => (response.json))
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

module.export = booksGetter;