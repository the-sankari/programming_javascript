// Kajol Sutra Dhar

// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let evenNum = 0;

for (let i = 1; i <= 20; i++) {
    let userInput = parseFloat(prompt(`Enter 20 number`));
    if (userInput % 2 == 0) {
        evenNum++;
    }else{
        console.log(`Invalid input. Please enter a valid number.`);
        i--; // Decrement i to repeat the current iteration
    }

}

console.log(`Number of even number: ${evenNum}`)


// Using while loop

// const inputCount = 4;
// let evenNum = 0;
// let index = 1;

// while (index <= inputCount) {
//     let userInput = prompt(`Enter 20 number value`);

//     if (userInput % 2 === 0) {
//        evenNum++;
//     }
//     index++;
// }

// console.log(`${evenNum}`)
