// index.js - This is the logic file for the lab6 assignment
// Author: Carly Hunter
// Date: 10/24/24

// Declarations:

let myTransport=["EBike", "Rides from my friends", "My Legs"];

let myMainRide = {
  make: "Radpower",
  model:"Radrunner",
  color: "Green",
  year: "2020",
  age: function() {
      return 2024 - this.year;
      }
  };

// Functions
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("For getting around, I use: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
