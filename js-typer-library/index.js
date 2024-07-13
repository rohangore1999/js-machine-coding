const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["love", "Jhakaas", "Mast"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 600;

let index = 0;
let charIndex = 0;

// to use as useEffect -> execute when dom loaded
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    // this will make sure all the letter of that index will print
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;

    //calling again type in setTimeout
    setTimeout(type, typingDelay);
  } else {
    // when char at index exceed word[index] length
    setTimeout(erase, typingDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    // charIndex has some chars, make it 0
    // to remove one char from end
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;

    //calling again type in setTimeout
    setTimeout(erase, typingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }

    setTimeout(type, typingDelay);
  }
}
