// Initial array of team members
const teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

//  for (const member of teamMembers) {
//     console.log(member);
// }

// Exercise 2: Remove the first member of the array.
// Write your code here:

// teamMembers.shift();
// console.log(teamMembers);

// Exercise 3: Remove the last member of the array.
// Write your code here:

// teamMembers.pop();
// console.log(teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:

// teamMembers.unshift('Alex');
// console.log(teamMembers);

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:

// teamMembers.push('Linda');
// console.log(teamMembers);

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
/** */

// teamMembers.splice(0,1);
// console.log(teamMembers);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

// console.log(teamMembers.indexOf('Mike'));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
// console.log(teamMembers.indexOf("Jake"));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

// const removedAndAdd = teamMembers.splice(teamMembers.indexOf('Mike'),1, 'Carol');
// console.log(teamMembers);

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

// const newArray = teamMembers.concat('Bob');
// console.log(newArray);

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

// const copyTeamMembers = teamMembers.slice();
// console.log(copyTeamMembers);

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ["Tina", "Dean"];
// Write your code here:

// const concatTwo = teamMembers.concat(newMembers);
// console.log(concatTwo);

// Exercise 13: Finding all occurrences of a John
// Write your code here:



// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

// filter


// const toUppperCase = teamMembers.map((member)=> member.toUpperCase());
// console.log(toUppperCase);
