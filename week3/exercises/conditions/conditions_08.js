// Kajol Sutra Dhar
/*
Compose a function called pluralize that:

Accepts two arguments: a noun and a number.
Returns a string combining the number and the appropriately pluralized form of the noun, such as '5 cats' or '1 dog'.

 */

// Applies for regular nouns only

function pluralize(noun, number) {
  if (number > 1) {
    return `${number} ${noun}s`; // Checks if the number of noun is plural
  } else if (number === 1) {     
    return `${number} ${noun}`;  //Checks if the number of noun is singular
  } else {
    return `no ${noun}`;         // Checks if the number of noun is zero, no noun
  }
}

// Sample usage - do not modify
console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("dog", 1));
console.log("I have " + pluralize("parrot", 7));
