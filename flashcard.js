let term = document.querySelector(".term");
let definition = document.querySelector('.definition');
let checkButton = document.querySelector('.check');
let nextButton = document.querySelector('.next');

let words = {
  Hello: "Bonjour",
  Goodbye: "Au revoir",
  Thanks: "Merci",
  "I drink water": "Je bois de l'eau"
}
 
data = Object.entries(words);

function getRandomTerm() {
  let topRandomTerm = data[Math.floor(Math.random() * data.length)]
  term.textContent = topRandomTerm[0];
  definition.textContent = topRandomTerm[1];
  nextButton.addEventListener('click', function() {
  console.log('You click the next button');
})
}

checkButton.addEventListener('click', function() {
  definition.style.display = 'block';
  term.style.display = "none";
  definition.style.zIndex = "+1";
});

nextButton.addEventListener('click', function() {
  getRandomTerm();
  definition.style.display = 'none';
  term.style.display = 'block';
});