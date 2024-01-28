// Ask for user input
const userInput = document.querySelector("#userInput");

const askBtnElement = document.querySelector(".btnAsk");
// printing the user input
const printUserInput = document.querySelector("#printUserInput");

const showResponse = document.querySelector("#response");
const smashImg = document.querySelector(".smash");

const errMsg = document.querySelector(".warning"); // Error massage
const emojiContainer = document.querySelector("#emojiContainer");

// Function for happy emojies
function happyEmojis() {
  // Display a random emoji image
  const randomEmojiIndex = Math.floor(Math.random() * 9) + 1; // Assuming you have images named emoji1.png, emoji2.png, ..., emoji8.png
  const emojiImagePath = `./images/emoji/happy${randomEmojiIndex}.png`;

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

// Function for magice ball response

function playMagicBall() {
  let randomNumber = Math.floor(Math.random() * 8);
  let response = "";
  switch (randomNumber) {
    // All the reponse quotes are from google

    case 1:
      response = "Without a doubt.";
      break;
    case 2:
      response = "Yes - definitely.";
      break;
    case 3:
      response = "You may rely on it.";
      break;
    case 4:
      response = "As I see it, yes.";
      break;
    case 5:
      response = "Reply hazy, try again.";
      break;
    case 6:
      response = "Don't count on it.";
      break;
    case 7:
      response = "My sources say no.";
      break;
    case 8:
      response = "My sources say no.";
      break;

    default:
      response = "Error: Unable to provide an answer.";
      break;
  }
  showResponse.textContent = `Magic 8 ball says: ${response} `;
}

function display() {
  const userQuestion = userInput.value.trim(); // Remove leading and trailing whitespaces

  if (
    userQuestion === "" ||
    userQuestion.charAt(userQuestion.length - 1) !== "?"
  ) {
    // Check if the input is empty or if the last character is not a question mark
    jarkImage();
    showResponse.style.display = "none";
    printUserInput.style.display = "none";
    errMsg.style.display = "block";
    errMsg.textContent =
      "Error: Please enter a valid question ending with a question mark.";
  } else {
    setTimeout(() => {
      happyEmojis();
    }, 1000);
    printUserInput.textContent = `You Asked: ${userQuestion}`;
    playMagicBall();
    showResponse.style.display = "block";
    printUserInput.style.display = "block";
    errMsg.style.display = "none";
    spinImage();
  }

  userInput.value = "";
}

// Function to handle button click
function spinImage() {
  // Add the "spin" class to the askBtnElement
  askBtnElement.classList.add("spin");

  // Remove the "spin" class after a delay (adjust the delay based on your animation duration)
  setTimeout(() => {
    askBtnElement.classList.remove("spin");
  }, 1000);
}
function jarkImage() {
  // Add the "spin" class to the askBtnElement
  askBtnElement.classList.add("spin");
  errMsg.classList.add("jark");
  // Remove the "spin" class after a delay (adjust the delay based on your animation duration)
  setTimeout(() => {
    askBtnElement.classList.remove("jark");
    askBtnElement.classList.remove("spin");
    errMsg.classList.remove("jark");
  }, 2000);
}
// Add a click event listener to the askBtnElement
askBtnElement.addEventListener("click", display);
