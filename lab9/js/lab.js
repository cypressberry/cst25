/*
// index.js - This is the logic file for the lab9 assignment
 * Author: Carly Hunter <casahunt@ucsc.edu>
 * Date: 11/04/24
 */
// Using jQuery to add buttons to each section
const defaultAudio = document.getElementById('default-audio');
const partyAudio = document.getElementById('party-audio');


$("#party-toggle button").click(function() {  //Toggles the party mode
    if ($("body").hasClass("party")) {
        // Switch back to default mode
        $("body").removeClass("party");
        $("#party-toggle button").html("Party");  //Updates button to provide party option
        partyAudio.pause(); //Pauses party audio
        partyAudio.currentTime = 0; // Reset party audio
        defaultAudio.play(); // Start default audio
    } else {
        // Switch to party mode
        $("body").addClass("party");  //Adds class to body, party
        $("#party-toggle button").html("Professional"); //Updates the button to provide professional option
        defaultAudio.pause(); //Pauses party audio
        defaultAudio.currentTime = 0; // Reset default audio
        partyAudio.play(); // Start party audio
    }
});


$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");  //Adds buttons to sections


$(document).on("click", ".highlight-button", function() { //Add toggle class functionality to button
    $(this).parent().toggleClass("special");  // Toggles the "special" class on the parent section of the clicked button
});


// Click event handler for the "make-hide" button
$("#make-hide").click(function() {
    $("#instructions").toggleClass("hidden"); // Toggles the "hidden" class on the element with ID "instructions"
});