/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const text = document.getElementById("content");
const btnElement = document.getElementById("chBtn");

const container = document.querySelector(".container");

function randNum(number) {
  return Math.floor(Math.random() * (number + 1));
  //       Math.floor(Math.random() * (number + 1));
}

function changeContent() {
  const randCol = `rgb(${randNum(255)} ${randNum(255)} ${randNum(255)})`;
  const randColE = `rgb(${randNum(255)} ${randNum(255)} ${randNum(255)})`;
  document.body.style.backgroundColor = randCol;
  container.style.backgroundColor = randColE;
  text.textContent = `Hello, World!`;
  console.log(`Container color code: ${randColE}!`);
  console.log(`Body color code: ${randCol}!`);
}

btnElement.addEventListener("click", changeContent);
