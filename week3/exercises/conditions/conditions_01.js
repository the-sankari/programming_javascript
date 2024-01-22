// Kajol Sutra Dhar

/**
Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios.
*/

function canVote(age) {
    if (age >= 18) { // Checks wheather the age is equel or above 18
        return true; // Return true if the age is equel or above 18
    }
    return false;   // Return false if the age is not equel or not above 18, 
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false
