// index.js - Lab 15 Logic
// Author: Carly Hunter
// Date: 11/25/24
// Constants

const API_URL = "https://api.chucknorris.io/jokes/random";
const NASA_APOD_API = "https://api.nasa.gov/planetary/apod";
const NASA_API_KEY = "";

// Functions

// Fetch a Chuck Norris joke from the API and display it in the output div.
function fetchJoke() {
  console.log("Button clicked. Fetching joke...");

  // Ajax used to fetch api
  $.ajax({
      url: API_URL,        // URL
      type: "GET",         // Request type
      dataType: "json",    // Response type
      success: function (data) {
          console.log("API call successful:", data);

          // Display the joke in the output div
          $("#output").html(`<p>${data.value}</p>`);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("API call failed:", textStatus, errorThrown); //Error Handling case

          // Display an error message
          $("#output").html("<p>Oops! Failed to fetch the joke. Try again later.</p>");
      }
  });
}


function fetchNasaPicture() {
  console.log("Fetching NASA Picture of the Day...");

  $.ajax({
      url: NASA_APOD_API,
      type: "GET",
      data: {
          api_key: NASA_API_KEY
      },
      dataType: "json",
      success: function (data) {
          console.log("NASA API call successful:", data);

          // Display the picture and explanation
          const htmlContent = `
              <h3>${data.title}</h3>
              <img src="${data.url}" alt="NASA Picture of the Day" style="max-width: 100%; height: auto;">
              <p>${data.explanation}</p>
          `;
          $("#nasa-output").html(htmlContent);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("NASA API call failed:", textStatus, errorThrown);
          $("#nasa-output").html("<p>Failed to fetch NASA's Picture of the Day.</p>");
      }
  });
}


//Main function to set up event listeners.
function main() {
  console.log("Main function started.");

  // Set up the click event for the button
  $("#activate").click(function () {
      fetchJoke();
  });

  $("#activate-nasa").click(function () {
      fetchNasaPicture();
  });
}

// let's get this party started
main();
