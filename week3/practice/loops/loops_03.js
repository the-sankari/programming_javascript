// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

const distance = document.querySelector("#distance");
const time = document.querySelector("#time");

const showDistance = document.querySelector(".distance");
const showTime = document.querySelector(".time");
const showSpeed = document.querySelector(".speed");
const submitBtnElement = document.querySelector(".btnSubmit");

// const heading = document.querySelector(".header");

submitBtnElement.addEventListener("click", () => {
  const distanceValue = parseFloat(distance.value);
  const timeValue = parseFloat(time.value);
  const speed = distanceValue / timeValue;
  showDistance.textContent = `Distance: ${distance.value} km`;
  showTime.textContent = `Time: ${time.value} hour`;
  showSpeed.textContent = speed;
  console.log(speed);
});
