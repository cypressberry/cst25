// index.js - This is the logic file for the lab11 assignment
// Author: Carly Hunter
// Date: 11/12/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  // Sorts the characters of a string in alphabetical order.
  function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }
  
  
  function anagram(inputString)
  {
      let characters = inputString.split(''); // Convert the string to an array of characters
      for (let i = characters.length - 1; i > 0; i--) //Loop through list of chars
      {
          const j = Math.floor(Math.random() * (i + 1));    // Generate a random index
       
  
          // Swap elements at positions i and j
          const temp = characters[i]; //set temp for saving first value
          characters[i] = characters[j]; //swap values via overwrite
          characters[j] = temp; //restore first value using temp
      }
  
      return characters.join(''); // Convert the array back to a string and return it
      
  }
  
  // click listener for button
  $("#submit").click(function(){
  
    // get value of input field
  const userName = $("#user-name").val()
  
  // now let's sort it
  userNameSorted = sortString(userName);
  
  // append a new div to our output div
  $("#output").html('<div class="text"><p> Sorted: ' + userNameSorted + '</p></div>'); //Adjusted code to label sort
  
  
  userNameAnagram = anagram(userName);  //Scramble input name
  $("#output").append('<div class="text"><p> Anagram\'d: ' + userNameAnagram + '</p></div>'); //Print with label
  
  });
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  