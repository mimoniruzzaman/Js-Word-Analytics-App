//Selectors
const textArea = document.querySelector(".text-area");
const wordCounter = document.querySelector(".words");
const charactersCounter = document.querySelector(".characters");
const twitterCounter = document.querySelector(".twitter");
const linkedinCounter = document.querySelector(".linkedin");

const textHendler = () => {
  // Text Characters;
  //   charactersCounter.innerHTML = textArea.value.length;
  let numberOfWords = textArea.value.length;
  charactersCounter.innerHTML = numberOfWords;

  // Text Words;
  wordCounter.innerHTML = textArea.value.split(" ").length;
  if (textArea.value.length === 0) {
    wordCounter.innerHTML = 0;
  }
  //   let wordOfCounter = textArea.value.split(" ").length;
  //   wordCounter.innerHTML = wordOfCounter;

  //Twitter Counter Limit Set;
  let twitterCharactersLeft = 250 - numberOfWords;
  twitterCounter.innerHTML = twitterCharactersLeft;

  if (twitterCharactersLeft < 0) {
    alert("Twitter Content Limit Reached!");
  }

  // Linkedin Count Limit Set;
  let linkedinCharactersLeft = 320 - numberOfWords;
  linkedinCounter.innerHTML = linkedinCharactersLeft;
};
textArea.addEventListener("input", textHendler);
