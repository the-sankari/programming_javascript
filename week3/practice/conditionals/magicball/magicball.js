// Ask for user input
const userInput = document.querySelector("#userInput");

const askBtnElement = document.querySelector(".btnAsk");
// printing the user input
const printUserInput = document.querySelector("#printUserInput");

const showResponse = document.querySelector("#response");
// const smashImg = document.querySelector(".smash");

const errMsg = document.querySelector(".warning"); // Error massage
const emojiContainer = document.querySelector("#emojiContainer");
const playLine = document.querySelector(".playLine");
const hide = document.querySelector(".hide");

// Function for happy emojies

function happyEmojis() {
  // Display a random emoji image
  const randomEmojiIndex = Math.floor(Math.random() * 8);
  const emojiImagePath = `./images/emoji/happy${randomEmojiIndex+1}.png`; // from chatgpt

  // Create an img element to display the emoji
  const emojiImage = document.createElement("img");
  emojiImage.src = emojiImagePath;
  emojiImage.alt = "Random Emoji";
  emojiImage.classList.add("btnAsk");

  // Clear previous emoji images and append the new one
  emojiContainer.innerHTML = "";
  emojiContainer.appendChild(emojiImage);

  setTimeout(() => {
    emojiContainer.appendChild(askBtnElement);
    emojiContainer.removeChild(emojiImage);
  }, 3000);
}

function playMagicBall() {
  const response = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes, for sure.",
    "Yes.",
    "Maybe not now, but yes later.",
    "I'm not sure, try again.",
    "Ask again later.",
    "Cannot predict now.",
    "Don't count on it.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Absolutely!",
    "Certainly!",
    "Without a doubt!",
    "Most certainly!",
    "It is a possibility.",
    "The stars align for a yes.",
    "The future is hazy, ask again.",
    "Better not to tell you now.",
    "Concentrate and ask again.",
    "My answer is no.",
    "Absolutely not!",
    "The outlook is bleak.",
  ];

  const randNum = Math.floor(Math.random() * response.length);
  showResponse.textContent = response[randNum];
}

// Display Functiom

function display() {
  const userQuestion = userInput.value.trim(); // Remove leading and trailing whitespaces
  playLine.style.display = "none";
  if (
    userQuestion === "" ||
    userQuestion.charAt(userQuestion.length - 1) !== "?"
  ) {
    animate(askBtnElement, "jark");
    animate(errMsg, "jark");
    showResponse.style.display = "none";

    errMsg.style.display = "block";
    errMsg.textContent =
      "Error: Please enter a valid question ending with a question mark.";
  } else {
    animate(loader, 'spin', 'block');
    setTimeout(() => {
    animate(loader, 'spin', 'none');
      happyEmojis();
    }, 1000);

    printUserInput.textContent = `You Asked: ${userQuestion}`;
    animate(showResponse,'hide', 'block');
    errMsg.style.display = "none";

    setTimeout(() => {
      playMagicBall();
      animate(askBtnElement, "spin", 'block');
    }, 1000);
  }

  userInput.value = "";
}

function animate(elements, animation, showHide) {
  elements.classList.add(animation);
  elements.style.display = showHide;

  setTimeout(() => {
    elements.classList.remove(animation);
  }, 1000);
  return;
}

// Add a click event listener to the askBtnElement
askBtnElement.addEventListener("click", display);
