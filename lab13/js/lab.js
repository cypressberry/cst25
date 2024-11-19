// index.js - Lab 13 Logic
// Author: Carly Hunter
// Date: 11/17/24
// Constants

// Functions

function fizzBuzzBoom() //FizzBuzzBoom function, does the weird counting output thing 
{
  let oneLongString = ""; //Initialize string to append to

  for (let num = 0; num <= 200; num++) //Loop parameters, arbitrary
  {
    let str = ""; //Instance string to hold values for this iteration
    
    if (num == 0) //Case == 0
    {
      // str += "FizzBuzzBoomBang!";
    }
  

    if (num % 3 === 0)  //Case mod 3
    {
      str += "Fizz";  //Append keyword
    }

    if (num % 5 === 0)  //Case mod 5
    {
      str += "Buzz";  //Append keyword
    }

    if (num % 7 === 0)  //Case mod 7 
    {
      str += "Boom";  //Append keyword
    }

    if (num % 9 === 0) //Case mod 9
    {
      str += "Bang";  //Append keyword
    }

    if (str === "") //Base case
    {
      oneLongString += num + "<br>";  //Print number and nothing else on that line
    }
    else
    {
      oneLongString += num + " - " + str + "!<br>"; //Print number and the weird string that we made
    }
  }

  $("#output").html(oneLongString); //Write the result to the output div
}

// Call the function to execute it
fizzBuzzBoom();

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();