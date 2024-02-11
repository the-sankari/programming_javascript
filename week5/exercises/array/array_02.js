// Exerice 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here

/*
const myAlphabetLength = () => {
  let arrayLength = myAlphabet.length;

  if (arrayLength <= 5) {
    console.log(
      `Array length is not leass than or equel to 5
    `
    );
  } else if (arrayLength >= 5) {
    console.log(`
    The length of myAlphabet: ${arrayLength}
    Array length is greater than or equal to 5.`);
  }
};
*/

// myAlphabetLength();

// Exerice 2: Iterate over array and log each item with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

// for (const element of planets ) {
//     console.log(`Planet: ${element}, Index: ${planets.indexOf(element)}`)
// }

// planets.map((planet)=> console.log(`Planet: ${planet}, Index: ${planets.indexOf(planet)}`));

// Exerice 3: Log array items with their types
const wowDatatypes = [1, "text", false, null, undefined];
/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here

/*
const arrayTypes = wowDatatypes.map((element)=> {
    console.log(`Item: ${element}, Index: ${wowDatatypes.indexOf(element)}, Type: ${typeof(element)}`)
})

*/

// Exerice 4: Log array items without using a loop
let myArr = [1, 2, "One", true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here

// console.log(myArr.join(', '));

// Exerice 5: Find common courses between two students
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here

// for (const student1Course of student1Courses ) {
//   for (const student2Course of student2Courses ) {
//     if (student1Course === student2Course) {
//       console.log(student1Course);
//     }
//   }
// }

// student1Courses.map((student1Course) => {
//   student2Courses.map((student2Course) => {
//     student1Course === student2Course ? console.log(student1Course) : false;
//   });
// });

// Exerice 6: Log each letter of array items
let furniture = ["Table", "Chairs", "Couch"];
/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here
/*
furniture.forEach((item) => {
  let letters = item.split("").join(", ");
  console.log(`Letter in ${item}: ${letters}`);
});*/

/**
 * 

furniture.map((item) => {
  let letters = [];
  for (const i of item) {
    letters.push(i);
  }
  console.log(`Letter in ${item}: ${letters.join(", ")}`);
});

furniture.forEach((item) => {
  let letters = [];
  for (const i of item) {
    letters.push(i);
  }

console.log(`Letter in ${item}: ${letters.join(", ")}`);

});
 */

// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here
/**
 * 
function getPositiveTemperatures(arr) {
  const newTemp = arr.filter((temp) => temp > 0);
  console.log(newTemp);
}
getPositiveTemperatures(temperatures);
 */
/*
function getPositiveTemperatures(arr) {
  let plusTemp = [];
  arr.filter((temp) => {
    temp > 0 ? plusTemp.push(temp) : false;
  });
  console.log(plusTemp);
}
getPositiveTemperatures(temperatures);
*/

// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here
/*
function getOddYears(arr) {
  return arr.filter((year) => year % 2 == 1);
}
*/

// Sample usage - Uncomment to test your function
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
