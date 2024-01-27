// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

/*
version 1.0.0
*/

while (true) {
  let distance = parseFloat(
    prompt(`Enter a distance in kilometers (Enter 0 to exit)`)
  );
  if (distance === 0) break;
  let time = parseFloat(prompt(`Enter time in hours: `));
  let speed = distance / time;
  console.log(`Average Speed: ${speed.toFixed(2)} km/h`);
}


/*
version 1.0.1
*/

/*
while (true) {
  let distance = parseFloat(prompt(`Enter a distance in km`));
  if (!distance) break;

  let time = parseFloat(prompt(`Enter time in hour`));

  if (!isNaN(time) && time !== 0) {
    let speed = distance / time;
    console.log(`${speed.toFixed(2)}`);
  } else {
    console.log("Invalid input. Please enter a on-zero value for time.");
  }
}
*/
 

/**
 * version 1.0.2
 */

 /**
   * 
// Function to get contimous user input

function getNumericInput(promptMessage) {
    let userInput;
    do {
      userInput = parseFloat(prompt(promptMessage));    // Continous promt to get input other than 0 
    } while (isNaN(userInput));     // Loop exits while input is NaN value or 0
    return userInput;
  }

  // Function for calculating the speed 
  
  function calculateSpeed(distance, time) {
    if (time !== 0) {   // Checks if the time value is not zero
      return console.log(`Speed: ${(distance / time).toFixed(2)}`); // Returns the speed calculation
    } else {
      return console.log(`Please eneter a valid number`);
    }
  }
  
  while (true) {
    let distance = getNumericInput(`Enter a distance in km or enter 0 to exit`); // Get distane input from the user
    if (distance === 0) {   // Checks if the distance value is zero, than exits the program with an alert
     alert(`Exiting the program`);
      console.log(`Program exited`);
      break;
    }
    let time = getNumericInput(`Enter time in hour`); // Get time input from the user
    calculateSpeed(distance, time); // Print the speed result on console
    
  }
 
   */


  /**
   * DOM veersion can be seen here
   * (file:///../../practice/loops/index.html)
   */
  
  
  