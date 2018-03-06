"use strict";

let $ = require('../lib/node_modules/jquery');


let meetUps = "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=10&page=10&key=742a785d27225b161f1072604e5e3a27";

let data = "";

// function getMeetup(data){
//     return $.ajax({
//         url: meetUps,
//         type: "json",
//     })
//     .then((data) => {
//         return data;
//     });
// }
// getMeetup(meetUps);
// console.log(data);


function getMeetup(data){
    return $.ajax({
        url: meetUps
    })
    .done((data) => {
        console.log(data);
        return data;
    });
}
getMeetup(meetUps)
.then((data) => {
    console.log(data);
});