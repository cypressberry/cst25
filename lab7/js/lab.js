/*
// index.js - This is the logic file for the lab6 assignment
 * Author: Carly Hunter <casahunt@ucsc.edu>
 * Date: 10/24/24
 */


function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

function sortUserName(userName) {

  return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
  // convert userName string to an array
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
  var shuffledArray = shuffleArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  // shift to Title Case (like a name)
  var newName = toTitleCase(shuffledString);
  // return array to a string
  return newName;
}

function main() {
  var userName = window.prompt("give me a word, any word.");
  document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
  var sortedName = sortUserName(userName);
  document.writeln("Here's your sorted word: " + sortedName + "</br></br>");
  var randomName = randomizeName(userName);
  document.writeln("would you look at that.<br>new word above.");
  document.writeln("<div class='name'>" + randomName + "</div>")
}

// call the function
main();