// Kajol Sutra Dhar
/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
     let lowerCaseWord = word.toLowerCase();  // Converting the word to lower case 
    let capitalizeFirstLetter = word[0].toUpperCase(); // Converting the first letter of the word to upper case
    let lastLetterIndexOfWord = lowerCaseWord.length -1; // Taking the last index of the word
    let extractLowerPart = lowerCaseWord.substr(1, lastLetterIndexOfWord); // Removing the first letter of the word and taking others in a variable

    return `${capitalizeFirstLetter}${extractLowerPart}`; // Concatening the whole word
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
