// Task 1: Creating and logging an object
/*
Create an object named `person` with properties: `name` set to "Alex" and `age` set to 30.
Log this object to the console.
*/

// Write your object here

const person = {
  name: "Alex",
  age: 30,
};
console.log(`Task 1`);
console.log(person);

// Task 2: Accessing Object Properties
/*
Access and log the `name` and `age` from the `person` object.
*/

// Write your code here
console.log(`Task 2`);

console.log(`Name: ${person.name}, Age: ${person.age}`);

// Task 3: Modifying Object Properties
/*
Update the `person` object: set the `age` to 31. Then, add a new property `country` set to "Canada".
Log the updated object.
*/

// Write your code here

person.age = 31;
person.country = "Canada";
console.log(`Task 3`);

console.log(person);

// Task 4: Nested Objects
/*
Create an object `student` with properties: `name` as "Emily" and `details` as an object with properties `age` set to 22, and `course` set to "JavaScript".
Log the `course` of the `student`.
Expected outcome: "Course: JavaScript"
*/

// Write your object and code here

const student = {
  name: "Emily",
  details: {
    age: 22,
    course: "JavaScript",
  },
};
console.log(`Task 4`);

console.log(`Course : ${student.details.course}`);

// Task 5: Deleting Properties
/*
From the `person` object, delete the `age` property. Log the resulting object.
Expected outcome: { name: "Alex", country: "Canada" }
*/

// Write your code here
console.log(`Task 5`);

delete person.age;
console.log(person);

// Task 6: Object Keys and Values
/*
Log all property names (keys) of the `person` object, then log all property values.
Expected outcomes:
Keys: name, country
Values: Alex, Canada
*/

// Write your code here
console.log(`Task 6`);

console.log(`Keys: ${Object.keys(person)}`);
console.log(`Values: ${Object.values(person)}`);

// Task 7: Using Object Methods
/*
Define a method inside the `person` object named `greet` that returns "Hello, my name is Alex".
Invoke this method and log the outcome.
Expected outcome: "Hello, my name is Alex"
*/

// Modify your person object and write your method invocation here

console.log(`Task 7`);

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();