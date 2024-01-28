// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

const distance = document.querySelector("#distance");
const time = document.querySelector("#time");
const submitBtnElement = document.querySelector(".btnSubmit");
const showDistance = document.querySelector(".distance");
const showTime = document.querySelector(".time");
const showSpeed = document.querySelector(".speed");

function calculateSpeed() {
  const distanceValue = parseFloat(distance.value);
  const timeValue = parseFloat(time.value);

  if (!isNaN(distanceValue) && !isNaN(timeValue) && timeValue !== 0) {
    const result = distanceValue / timeValue;
    return result.toFixed(2);
  } else if (isNaN(distanceValue) || distanceValue === 0) {
    alert(`Please enter a non-zero and valid distance value`);
  } else if (isNaN(timeValue) || timeValue === 0) {
    alert(`Please enter a non-zero and valid time value`);
  }
}

const displaySpeed = () =>{
    const speed = calculateSpeed();
    if (speed !== undefined) {
      showDistance.textContent = `Distance: ${distance.value} km`;
      showTime.textContent = `Time: ${time.value} hour`;
      showSpeed.textContent = `Speed: ${speed} km/h`;
    }
}

submitBtnElement.addEventListener("click", () => {
displaySpeed();
});
