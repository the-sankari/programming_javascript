/* 
Create functionality where an input field's value is continuously displayed and updated in a dedicated area on the page as the user types, using the onchange event.*/

/* 

Instructions:

HTML:
- Make a basic HTML
- Include an <input type="text"> element where the user can enter text.
- Add a <div> element with an ID (e.g., id="displayText"), which will be used to display the input field's value.
- Remember to connect HTML and JS files

JavaScript:

Write JavaScript code that adds an event listener to the input field, specifically listening for the change event. 

The event listener's function should:
- Retrieve the current value from the input field.
- Update the textContent of the displayText <div> to match the input field's value.
- To have the display update more dynamically (as the user types), consider using the input event instead of or in addition to the change event.  */

const userInput = document.querySelector("#user-text");
const displayText = document.querySelector("#displayText > p");

// function display(text) {
//   // https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

//   displayText.textContent = text.target.value;
// }


// Using arrow function 
const display = ()=>{
  let newText = displayText.textContent = value
  console.log(newText);
}


userInput.addEventListener("input", display);

// userInput.addEventListener('change', ()=>{
//     display();
// })
