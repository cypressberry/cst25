/*
// index.js - This is the logic file for the lab7 assignment
 * Author: Carly Hunter <casahunt@ucsc.edu>
 * Date: 10/28/24
 */


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function getSortedName(person) {
  // some code here
  let sortedName = person.split("").sort().join("");  //Take the name and split, sort, and join into a string
  
  // return results;
  return sortedName;
}

function main() {
  console.log("Main function started.");
  let person = prompt("Please enter your name"); //Launch a prompt for the user to enter their name
  document.writeln("Your sorted name is: " + getSortedName(person)); //Print string + result of function with name passed as an arg
  // the code that makes everything happen
}

// let's get this party started
main();