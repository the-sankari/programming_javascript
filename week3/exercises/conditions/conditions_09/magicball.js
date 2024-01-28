// Ask for user input

const askBtnElement = document.querySelector("#btnAsk");
// printing the user input
const printUserInput = document.querySelector("#printUserInput");

const showResponse = document.querySelector("#response");

const errMsg = document.querySelector(".warning"); // Error massage

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
  showResponse.textContent = `Magic 8 ball says: ${response}`;
}

function display() {
  const userPromtInput = prompt(`Ask a yes or no question!`);

  if (userPromtInput) {
    printUserInput.textContent = `You: ${userPromtInput}`;
    playMagicBall();
    showResponse.style.display = "block";
    printUserInput.style.display = "block";
    errMsg.style.display = "none";
  } else {
    showResponse.style.display = "none";
    printUserInput.style.display = "none";
    errMsg.style.display = "block";
    errMsg.textContent = `Error: Please ask something`;
  }
  userPromtInput = "";
}

askBtnElement.addEventListener("click", () => {
  display();
});
