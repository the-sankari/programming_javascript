// Kajol Sutra Dhar
// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.



let count = 0;
let sum = 0;
while (true) {
    let userInput = parseFloat(prompt(`Enter a number (Enter0 to Exit)`));
    if (!userInput)break;
    count++; // Inreasing the number of input
    sum += userInput;  // Sum of the user inputs
}

console.log(`${sum / count}`);