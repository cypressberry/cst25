// index.js - Lab 16 Logic
// Author: Carly Hunter
// Date: 12/2/24

// Constants
const apiBaseUrl = "https://api.allorigins.win/raw?url=https://xkcd.com"; //Proxied apibaseURL, from chatGPT solves "Same origin Policy" issue
const apiSuffix = "info.0.json";       // API endpoint suffix


// Functions

/**
 * Fetches comic data from the XKCD API and updates the webpage.
 * @param {number|null} comicNum - The comic number to fetch (null for the latest comic).
 */
function fetchAndDisplayComic(comicNum = null) { //function header
  
  const apiUrl = comicNum ? `${apiBaseUrl}/${comicNum}/${apiSuffix}` : `${apiBaseUrl}/${apiSuffix}`; // Construct the API URL
  

  // Use $.ajax() to fetch data
  $.ajax({
      url: apiUrl,          //datafields for request, given
      type: "GET",          //datafields for request, given
      dataType: "json",     //datafields for request, given
      success: function (comicObj) {  //In case of success 
          console.log("Fetched comic data:", comicObj); // Debug: log the response

          // Update the webpage with the comic data, add buttons
          $("#output").html(`
              <h3>${comicObj.title}</h3>
              <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
              <p>${comicObj.alt}</p>
              <div>
                  <button id="prev">Previous</button>
                  <button id="next">Next</button>
              </div>
          `);

          // Attach event listeners for navigation buttons
          $("#prev").click(() => fetchAndDisplayComic(comicObj.num - 1));
          $("#next").click(() => fetchAndDisplayComic(comicObj.num + 1));
      },
      error: function (jqXHR, textStatus, errorThrown) {  //In case of error
          console.error("Error fetching comic:", textStatus, errorThrown);
          $("#results").html("<p>Failed to load the comic. Please try again later.</p>");
      }
  });
}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  fetchAndDisplayComic(); // Fetch and display the latest comic
}

// let's get this party started
main();
