// index.js - Lab 12 Sorting Hat
// Author: Carly Hunter
// Date: 11/14/24

// Array of houses and descriptions
const housesArray = [
  { title: "Gryffindor", text: "Your heart sings for that of bravery, daring, nerve, and chivalry." },
  { title: "Hufflepuff", text: "A badger who works day in and day out.  hard work, dedication, patience, and loyalty." },
  { title: "Ravenclaw", text: "A raven watches you intently. It's words are of intelligence, knowledge, and wit." },
  { title: "Slytherin", text: "The snake's bitter ambition, cunning, and resourcefulness is bestown upon you." },
  { title: "Ravenpuff", text: "A blend of Ravenclaw's intellect and Hufflepuff's kindness." },
  { title: "Slytherdor", text: "A mix of Slytherin's ambition and Gryffindor's courage." },
  { title: "Gryffinpuff", text: "A combination of Gryffindor's bravery and Hufflepuff's loyalty." },
  { title: "Raverin", text: "Ravenclaw's wit combined with Slytherin's resourcefulness." }
];

// Array of sorting chants
const chantsArray = [
  "The hat whispers softly...",
  "A deep voice booms...",
  "The Sorting Hat mutters mysteriously...",
  "You hear the Sorting Hat sing..."
];

// Function to calculate a checksum for a string
function checksum(s) {
  let hash = 0, strlen = s.length;
  if (strlen === 0) return hash;
  for (let i = 0; i < strlen; i++) {
      const char = s.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Sorting Hat function with checksum-based sorting
function sortingHat(str) {
  const hash = checksum(str);
  const mod = hash % housesArray.length; // Use checksum mod length to assign a house
  return housesArray[mod];
}

// Function to generate a random chant
function randomChant() {
  const index = Math.floor(Math.random() * chantsArray.length);
  return chantsArray[index];
}

// DOM manipulation and event listener setup
document.getElementById("button").addEventListener("click", function() {
  const name = document.getElementById("input").value.trim();
  if (name) {
      // Sort the user into a house
      const house = sortingHat(name);

      // Generate a random chant
      const chant = randomChant();

      // Output the results
      const outputHTML = `
          <p><em>${chant}</em></p>
          <h2>${house.title}!</h2>
          <p>${house.text}</p>
      `;
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = outputHTML;
      outputDiv.classList.remove("hidden");
  } else {
      alert("Please enter a valid name!");
  }
});

// Reset output when the input field gains focus
document.getElementById("input").addEventListener("focus", function() {
  const outputDiv = document.getElementById("output");
  outputDiv.classList.add("hidden");
});
