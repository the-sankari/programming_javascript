// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

let str = " ";
for (let num = 2; num < 100; num += 2) {
  str = str + num + " ";
}
console.log(`${str} `);
