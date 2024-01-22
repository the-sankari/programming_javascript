// Kajol Sutra Dhar
/**
Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
 */

function evenOrOdd(number) {
    let positiveNumber = Math.abs(number);  // Converting the number to positve value after divided by 2
    if (positiveNumber % 2 === 0) { // Checking if the remainder is 0 
        return `even`;  // If the remainder is 0 then prints the "even" string
    } else if (positiveNumber % 2 ===1 ) { // Checking if the remainder is 1 after divided by 2
        return `odd`; // If the remainder is 0 then prints the "odd" string
    } else return `You did't input an number value`; // When the input is not a number
    

}

// Sample usage - do not modify
console.log(evenOrOdd(25)); // true
console.log(evenOrOdd(18)); // true
console.log(evenOrOdd(-17)); // false
