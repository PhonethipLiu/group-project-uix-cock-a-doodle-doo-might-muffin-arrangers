"use strict";

console.log("main js here");


function makeAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

makeAPICall('https://newsapi.org/v2/top-headlines?country=us&apiKey=511e64b5fdc44764af3517769a250375')
.then ((resolve) => {
    console.log("makeAPICall Resolved", resolve);
    // console.log("makeCallResolve", resolve.setup);
    // console.log("makeCallResolve", resolve.punchline);
    
},
(reject) => {
    console.log("DOH! something went wrong");
});