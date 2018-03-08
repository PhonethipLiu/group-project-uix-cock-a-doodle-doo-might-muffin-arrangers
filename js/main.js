"use strict";
console.log("main js here");
  

       let $ = require('jquery'),
       news = require("./news-Getter"),
       meetup = require('./ajaxCall'),
       bookSearch = require("./books-getter"),
       weather=require("./weather_load"),
       user=require("./user"),
       DOMbuild =require("./add_user"),      
       firebase = require("./config");
      


// Preparing the object to be posted to firebase
function creatUserObj() {
    let userObj = {
        // We can use the same variable or reference that we use to display the name at the top of the page
        name: "",
        location: "",
        uid: user.getUser()
    };
    console.log("userObj", userObj);
    return userObj;

}

//login//
$("#login").click(function () {
    console.log("clicked auth");
    user.logInGoogle()
        .then((result) => {
            console.log("result from login", result.user.uid);
            user.setUser(result.user.uid);
            DOMbuild.hideLogButtons(user.getUser());
            dbMaster();
        });
});

            function dbMaster() {
                let userObj = buildUserObj();
                DOMbuild.addUser;
            }

            //logout//
            $("#logout").click(function () {

                console.log('clicked logout');
       user.logOut();
                DOMbuild.hideLogButtons(null);
                // .then((user) => {

                console.log("its da result", user.getUser());

            });

