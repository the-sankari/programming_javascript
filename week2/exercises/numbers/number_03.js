// Kajol Sutra Dhar
/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

let num1 = 12.8;
let num2 = 16.4;

let roundedNum1 = Math.round(num1); //Math.round(x)
let roundedNum2 = Math.round(num2); // Math.round(x)

let sqrtNum1 = Math.sqrt(roundedNum1); // Math.sqrt(x)

let maxNum = Math.max(roundedNum1, roundedNum2); // Math.max(), Math.max        (value1), Math.max(value1, value2), Math.max(value1, value2, /* …, */ valueN)

console.log(`
Rounded Number1:    ${roundedNum1} --> Type: ${typeof roundedNum1}
Rounded Number2:    ${roundedNum2} --> Type: ${typeof roundedNum2}
Squre Root Number:  ${sqrtNum1} --> Type: ${typeof sqrtNum1}
Max Number:         ${maxNum} --> Type: ${typeof maxNum}

 `);

 /**
  * OUTPUT
  * ________________
    Rounded Number1:    13 --> Type: number
    Rounded Number2:    16 --> Type: number
    Squre Root Number:  3.605551275463989 --> Type: number
    Max Number:         16 --> Type: number 
  */