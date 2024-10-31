// index.js - This is the logic file for lab 8.
// Author: Carly Hunters
// Date: 10/30/24

// Constants
array = [0, 1, 2];

// Functions
function timesTwo(x) {
  let results = x * 2;
  return results;
}

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  array.map(timesTwo);
  let mapResults = array.map(timesTwo);
  console.log("Results with map function: ", mapResults);

  let squareResults = array.map(function (x) {
    var results = x * x;
    return results;
  });
  console.log("Results with anonymous function (square): ", squareResults);

  // $("#output").html(mapResults);
  // $("#output").html(squareResults);

  $("#output").html(
    "<h3>Script Output</h3> <p>Results with the function 'timesTwo': " +
      mapResults.join(" ") +
      ". Results with anonymous function 'square': " +
      squareResults.join(" ") +
      "</p>"
  );
}

// let's get this party started
main();