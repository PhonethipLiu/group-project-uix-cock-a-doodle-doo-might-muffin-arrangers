"use strict";
console.log("weather");


// 
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var APPID ='7c6212572dc00aca5008de2575471183';
var units="metric";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
let i;


function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.code = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            /* NEW */
            weather.direction = degreesToDirection(data.wind.deg);
            weather.location = data.name;
            /* NEW */
            weather.temp =(data.main.temp);
            update(weather);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function degreesToDirection(degrees) {
    var range = 360 / 16;
    var low = 360 - range / 2;
    var high = (low + range) % 360;
    var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    for (i in angles) {
        if (degrees >= low && degrees < high) {
            console.log(angles[i]);
            return angles[i];
            // console.log("derp");
        }
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
    return "N";

}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");
};

    function updateByCityName(cityName) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "cityName=" + cityName +
        "&APPID=" + APPID;
    sendRequest(url);
}

    // ==========
    if (navigator.geolocation) {
        var showPosition = function (position) {
            weatherAsk(position.coords.latitude, position.coords.longitude);
        };
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var cityName = window.prompt("Could not discover your location. What is your city code?");
        updateByCityName(cityName);
    }

    function update(weather) {
        icon.src = `${../imgs/codes}${weather.icon}.png`;
        humidity.innerHTML = weather.humidity;
        wind.innerHtml = weather.wind;
        direction.innerHTML = weather.direction;
        loc.innerHTML = weather.location;
        temp.innerHTML = weather.temp;
        // console.log(icon.src);
    }


    var button = document.getElementById("button");
    var input = document.getElementById("city");
    button.addEventListener("click", weatherAsk);
    function weatherAsk(lat, lon) {
        var url = `${api}${input.value}&APPID=${APPID}&units=${units}`;
        // console.log(url);
       sendRequest(url);

}







