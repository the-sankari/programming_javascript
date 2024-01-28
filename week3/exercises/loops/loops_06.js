// Kajol Sutra Dhar

// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function calculateAvg() {
  let sum = 0;
  let count = 0;
  while (true) {
    let userInput = prompt(`Eneter a single number!!`);
    count++;
    if (userInput === null) break; // user clicked cancel or input nothing

    parsedNumber = parseFloat(userInput);

    if (!isNaN(parsedNumber)) {
      sum += parsedNumber;

      const userChoice = confirm(
        `Do you want to continue giving numbers? (y/n)`
      );
      if (!userChoice) break;
    } else {
      console.log(
        `${parsedNumber} is not a valid number. Please enter a valid number!!`
      );
    }
  }
  console.log((average = sum / count));
}

calculateAvg();
