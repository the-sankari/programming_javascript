// Kajol Sutra Dhar
/**
Develop a function named assignGrade that:

Accepts a single argument, a numerical score.
Returns a letter grade for the score based on these criteria:
- 'A' for scores 90 and above.
- 'B' for scores 80 to 89.
- 'C' for scores 70 to 79.
- 'D' for scores 60 to 69.
- 'F' for scores below 60.

*/

function assignGrade(score) {
  if (score >= 90) {                       // Conditions checked for 'A' for scores 90 and above.
    return "A";
  } else if (score >= 80 && score <= 89) { // Conditions checked for B' for scores 80 to 89.
    return "B";
  } else if (score >= 70 && score <= 79) { // Conditions checked for 'C' for scores 70 to 79.
    return "C";
  } else if (score >= 60 && score <= 69) { // Conditions checked for 'D' for scores 60 to 69.
    return "D";
  } else if (score < 60) {                 // Conditions checked for 'F' for scores below 60.
    return "F";
  }
}

// Sample usage - do not modify
console.log("You got a " + assignGrade(95)); // You got a A
console.log("You got a " + assignGrade(81)); // You got a B
console.log("You got a " + assignGrade(72)); // You got a C
console.log("You got a " + assignGrade(64)); // You got a D
console.log("You got a " + assignGrade(42)); // You got a F
