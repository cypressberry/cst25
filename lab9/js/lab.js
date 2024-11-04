/*
// index.js - This is the logic file for the lab9 assignment
 * Author: Carly Hunter <casahunt@ucsc.edu>
 * Date: 11/04/24
 */
// Using jQuery to add buttons to each section
const defaultAudio = document.getElementById('default-audio');
const partyAudio = document.getElementById('party-audio');


$("#party-toggle button").click(function() {
    if ($("body").hasClass("party")) {
        // Switch back to default mode
        $("body").removeClass("party");
        $("#party-toggle button").html("Party");
        partyAudio.pause();
        partyAudio.currentTime = 0; // Reset party audio
        defaultAudio.play(); // Start default audio
    } else {
        // Switch to party mode
        $("body").addClass("party");
        $("#party-toggle button").html("Professional");
        defaultAudio.pause();
        defaultAudio.currentTime = 0; // Reset default audio
        partyAudio.play(); // Start party audio
    }
});


$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");


$(document).on("click", ".highlight-button", function() {
    $(this).parent().toggleClass("special");
});

$("#make-hide").click(function() {
    $("#instructions").toggleClass("hidden");
});
