"use strict";




function addSong(songFormObj) {   //this method is to add data to firebase
    return $.ajax({  // $ is used to call jquery
        url: `${firebase.getFBsettings().databaseURL}/songs.json`,
        type: 'POST',    // This tells firebase we plan to post data to the json file
        data: JSON.stringify(songFormObj),
        dataType: 'json'
    }).done((songID) => {
        return songID;
    });
}