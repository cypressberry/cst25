// index.js - Lab 12 Sorting Hat
// Author: Carly Hunter
// Date: 11/14/24

// Array of houses and descriptions
const housesArray = [
  { title: "Gryffindor", text: "The lion roars within you, calling forth bravery, daring, nerve, and chivalry. Gryffindors are driven by an unyielding courage that pushes them to stand up for what they believe in, even in the face of great danger. You are a protector and a leader, someone who values integrity and justice above all else. While your boldness can sometimes make you impulsive, your steadfast loyalty to friends and your unshakable moral compass mean you are always striving to do what’s right. A Gryffindor isn’t afraid to take risks, not for glory, but because they know their actions might inspire others to do the same." },
  { title: "Hufflepuff", text: "A badger who works day in and day out, valuing hard work, dedication, patience, and loyalty. Hufflepuffs are the unsung heroes who believe that effort and kindness can overcome even the greatest of obstacles. Your honesty and compassion make you a trusted confidant, and your unrelenting commitment to fairness ensures everyone has a voice. Beneath your humble demeanor lies an unshakable resolve, proving that quiet strength is often the most enduring." },
  { title: "Ravenclaw", text: "A raven watches you intently, its eyes brimming with intelligence, knowledge, and wit. As a Ravenclaw, you are guided by an insatiable curiosity and a love for learning that knows no bounds. Your creativity and problem-solving skills make you a beacon of innovation. You see the world as a puzzle to be solved, and your wisdom and intellect often set you apart as a leader of thought. Yet, it is your imagination that truly defines you, allowing you to dream of what others cannot." },
  { title: "Slytherin", text: "The snake's bitter ambition, cunning, and resourcefulness are bestowed upon you. In Slytherin, you find a relentless drive to achieve your goals, no matter the obstacles. You possess an unmatched strategic mind, able to turn challenges into opportunities. Others may underestimate the depth of your loyalty to those you hold dear, but your cunning ensures they never take you lightly. You are adaptable and unafraid to take calculated risks, making you a formidable force in any pursuit." },
  { title: "Ravenpuff", text: "A blend of Ravenclaw's intellect and Hufflepuff's kindness creates a rare individual who values both the pursuit of knowledge and the importance of empathy. As a Ravenpuff, you are as insightful as you are approachable. You seek not only to understand the world but also to improve it through compassion and wisdom. Your determination and reliability make you an excellent ally, and your ability to balance intellect with heart is your greatest strength.." },
  { title: "Slytherdor", text: "A mix of Slytherin's ambition and Gryffindor's courage gives rise to a fearless achiever. Slytherdors are bold visionaries, unafraid to chase their dreams with both determination and daring. Your bravery fuels your ambitions, and your cunning ensures you have the tools to see them through. You are a natural leader who can inspire others with both charisma and action, embodying the perfect harmony of valor and strategy." },
  { title: "Gryffinpuff", text: "A combination of Gryffindor's bravery and Hufflepuff's loyalty forms a soul of unwavering dedication. Gryffinpuffs are the embodiment of courageous kindness, always standing up for what is right while staying grounded in compassion. You are fiercely protective of your loved ones and will stop at nothing to ensure their well-being. Your heroic spirit, tempered by your genuine care for others, makes you a beacon of hope and strength in any community." },
  { title: "Raverin", text: "Ravenclaw's wit combined with Slytherin's resourcefulness results in a mind as sharp as it is strategic. Raverins are intellectual powerhouses who use their intelligence to outmaneuver any challenge. You are innovative, sly, and deeply curious, able to see possibilities where others see limitations. Your adaptability and cleverness make you a problem-solver who thrives under pressure, and your natural charisma ensures that others are drawn to your brilliance." }
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
