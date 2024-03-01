/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

const library = [
  {
    title: "Geetanjali",
    author: "Rabindranath Tagore",
    yearPublished: 1910,
  },
  {
    title: "Agnibeena",
    author: "Kazi Nazrul Islam",
    yearPublished: 1922,
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doylee",
    yearPublished: 1887,
  },
];

console.log(`Task 1: ${library}`);

// Your code here

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/
// Your code here

console.log(`Task 2`);

// const book1 = library[0];

console.log(library[0].title);

library[1].yearPublished = 1920;

console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library[0].genres = ["poetry"];
library[0]["isAvailable"] = true;
console.log(`Task 3`);
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
console.log(`Task 4`);
class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}

const book2 = new Book("Hamlet", "William Shakespeare", 1600, "drama");

// console.log(book2);

console.log(library);
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

function createBook(title, author, yearPublished, genres) {
  return new Book(title, author, yearPublished, genres);
}
console.log(`Task 5`);
const newBook = createBook("Hamlet", "William Shakespeare", 1600, [
  "Drama",
  "poet",
]);
console.log(newBook);

// console.log(createBook(...library.genres));

// const book5 = new createBook('Hamlet','William Shakespeare', 1600, ['drama']);

// console.log(book5);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
console.log(`

Task 6

`);

const libraryJson = JSON.stringify(library);

console.log(libraryJson);
console.log(JSON.parse(libraryJson));
