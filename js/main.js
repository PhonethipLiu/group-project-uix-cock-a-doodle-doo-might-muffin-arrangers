"use strict";
console.log("main js here");
  

       let $ = require('jquery'),
       news = require("./news-Getter"),
       meetup = require('./ajaxCall'),
       bookSearch = require("./books-getter"),
       weather=require("./weather_load"),
       user=require("./user");
       addUser =require("./add_user")
       
        
let firebase;


        $("#login").click(function () {
            // console.log("clicked auth");
            user.logInGoogle()
                .then((result) => {
                    // console.log("result from login", result.user.uid);
                    user.setUser(result.user.uid);
                    dbMaster();
                });
            function dbMaster() {
                let userObj = buildUserObj();
                db.addUser(userObj);
            }
                function buildUserObj() {
                    let userObj = {
                        // We can use the same variable or reference that we use to display the name at the top of the page
                        name: "",
                        location: "",
                        uid: user.getUser()
                    };
                    console.log("userObj", userObj);
                    return userObj;
                }
            });

            // Get a reference to the database service
            var database = firebase.database();
            // save the user's profile into Firebase so we can list users,
            // use them in Security and Firebase Rules, and show profiles
function buildUserObj(userId, name, email, imageUrl, uid) {
                firebase.database().ref('users/' + userId).set({
                    username: name,
                    email: email,
                    imageUrl:imageUrl,
                    uid: user.getUser()
                    //some more user data
               
              
                });
            }




