// Kajol Sutra Dhar

// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let inputCounter = 4;
let smallest, biggest;

let counter = 0;
for (let i = 0; i < inputCounter; i++) {
  let userNumbers = parseFloat(
    prompt(`Enter number ${i} of ${inputCounter}: `)
  );

  if (isNaN(userNumbers)) {
    console.log(`${userNumbers} is not valid. Please enter a valid number`);
    i--;
    continue;
  } else if (userNumbers === 0) {
    console.log(`${userNumbers} is zero. Please enter a valid non ero number`);
    i--;
    continue;
  }
  

}

// let inputCount = parseFloat(prompt(`How many numbers do you wish to input?`));
// let smallest, biggest;

// const numbers = [];

//  /** Using For loop */

// for (let i = 0; i < inputCount; i++) {
//   let userInput = parseFloat(prompt(`Enter number ${i + 1}: `));
//   numbers.push(userInput);
// }
// // Calculate the smallest and minimum numbers
// // Refference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// smallest = Math.min(...numbers);
// biggest = Math.max(...numbers);

// Display the smallest and biggest numbers
console.log(`
--> Your input: ${numbers} 
--> Smallest number: ${smallest}
--> Biggest number: ${biggest}
`);

/** Using While loop */

/**
let inputCount = prompt(`How many numbers do you wish to input?`);
let smallest, biggest;

const numbers = [];
let i = 1;

while (i <= inputCount) {
  let userInput = parseFloat(prompt(`Enter number ${i}: `));
  numbers.push(userInput);
  i++;
}

// Calculate the smallest and minimum numbers 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

smallest = Math.min(...numbers); 
biggest = Math.max(...numbers);

// Display the smallest and biggest numbers
console.log(`Smallest number: ${smallest}
Biggest number: ${biggest}`);

*/
