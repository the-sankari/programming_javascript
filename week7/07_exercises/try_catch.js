"use strict";

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  // Simulate error
  console.log(name);
  throw new Error("Oops, something went wrong!");
}

try {
  task1("kajol");
  console.log("Taks one is successfull");
} catch (error) {
  console.log(error.name, error.message);
}
// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  // Code here
  console.log(task_2_name);
  throw new Error("You attempted an error");
}

try {
  task2("task 2");
  console.log("Task 2 is completed");
} catch (error) {
  console.log(error.name, error.message);
}

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  // Code here
  console.log(task_3_name);
  throw new Error("You attempted an error");
}

try {
  task2("task 3");
  console.log("Task 3 is completed");
} catch (error) {
  console.log(error.name, error.message);
} finally {
  console.log("Execution completed");
}

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

console.log("Task 4");

function task4() {
  // Code here

  try {
    console.log("Outer try block");
    try {
      console.log(task_4_name);
      throw new Error("Error inside nested try ");
    } catch (e) {
      console.error("inner catch", e.message);
    }
  } catch (er) {
    console.error("Outer", er.message);
  } finally {
    console.log("Execution completed Task 4");
  }
}

task4();

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  // Code here
  try {
    console.log(array, index);

    const arr = array.map((element) => {
      console.log(`Element: ${element}, Index: ${array.indexOf(element)}`);
    });
    throw new Error(`${index} is out of bound in Task 5`);
  } catch (error) {
    console.error("403:", error.message);
  }
}

task5([1, 2, 3, 4, 5], 5);
