"use strict";

console.log("user.js here");



       let firebase = require("./config"),
        provider = new firebase.auth.GoogleAuthProvider(),
        currentUser = null;



       
        function googleLogIn() {

            return firebase.auth().signInWithPopup(provider);
        }
        function googleLogOut() {
            return firebase.auth().signOut();
        }
        function setUser(val) {
            currentUser = val;
        }
        function getUser() {
            return currentUser;
        }
        firebase.auth().onAuthStateChanged(function (user) {  //.onAuthStateChanged is a firebase method from firebase
            console.log("onAuthStateChanged", user);
            if (user) {
                currentUser = user.uid;
            } else {
                currentUser = null;
                console.log("NO USER LOGGED IN");
            }
        });





            

module.exports = { googleLogIn, googleLogOut, setUser, getUser };