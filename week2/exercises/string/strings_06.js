// Kajol Sutra Dhar

/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.

 */
function skipFirstCharacter(text) {
    let index = text.length -1; // Geting the last index of the string
    return text.substr(1, index); // The substr() method of String values returns a portion 
                                    //of this string, starting at the specified index and extending 
                                    //for a given number of characters afterwards.


}

// Sample usage - do not modify
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"
