// Function to get contimous user input

function getNumericInput(promptMessage) {
  let userInput;
  do {
    userInput = parseFloat(prompt(promptMessage));
  } while (isNaN(userInput));
  return userInput;
}

function calculateSpeed(distance, time) {
  if (time !== 0) {
    return console.log(`Speed: ${(distance / time).toFixed(2)}`);
  } else {
    return console.log(`Please eneter a valid number`);
  }
}

while (true) {
  let distance = getNumericInput(`Enter a distance in km or enter 0 to exit`);
  if (distance === 0) {
   alert(`Exiting the program`);
    console.log(`Program exited`);
    break;
  }
  let time = getNumericInput(`Enter time in hour`);
  calculateSpeed(distance, time);
  
}



