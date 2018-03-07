"use strict";
console.log("main js here");
  let $ = require('jquery'),
       news = require("./news-Getter"),
       db = require('./ajaxCall'),
       bookSearch = require("./books-getter"),
       weather=require("./weather_load"),
       user=require("./user");
       
        




        function dbMaster() {
        let userObj = buildUserObj();
        db.addUser(userObj);
                }

        $("#login").click(function () {
            // console.log("clicked auth");
            user.logInGoogle()
                .then((result) => {
                    // console.log("result from login", result.user.uid);
                    user.setUser(result.user.uid);
                    dbMaster();
                });


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







