/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
// Parent container
const fruitList = document.querySelector("#fruitList");

// Getting the input
const input = document.querySelector("#fruitInput");

// Add btn
const addBtn = document.querySelector("#addFruitBtn");

// Function to add new items
function addFruitToList() {
  // console.log(input.value);

  // Creating new li element
  const newItem = document.createElement("li");

  // Assigning input value to the new li element
  newItem.textContent = input.value;

  // Appending new child to the fruitlist
  fruitList.appendChild(newItem);

  // Clearing the input area
  input.value = "";
}

// Add click event to the add btn
addBtn.addEventListener("click", addFruitToList);
