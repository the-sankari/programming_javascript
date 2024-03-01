"use strict";

// Select the add car button
const carAddbtn = document.querySelector("#addCar");

// Select the table body to change the element and text inside the body of the table, not the whole table
const tableBody = document.querySelector(".car-table-body");

// Car array to store car inputs
const cars = [];

// Car class constructor that makes a car object for reuse
class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

// Get the car data from user unput and store the in car arrays to display on the table
const addCarData = () => {
  try {
    // accessing the input data from the user
    const licenseInput = document.querySelector("#license");
    const makerInput = document.querySelector("#maker");
    const modelInput = document.querySelector("#model");
    const ownerInput = document.querySelector("#owner");
    const priceInput = document.querySelector("#price");
    const colorInput = document.querySelector("#color");

    // validate the input value, if empty throw error to avoid duplicating
    if (
      !licenseInput.value ||
      !makerInput.value ||
      !modelInput.value ||
      !ownerInput.value ||
      !priceInput.value ||
      !colorInput.value
    ) {
      throw new Error("Please fill all the input first");
    }

    const price = parseFloat(priceInput.value).toFixed(2);

    if (isNaN(price || price <= 0)) {
      throw new Error("Please input a valid numeric price value");
    }

    // Get the input value
    const license = licenseInput.value;
    const maker = makerInput.value;
    const model = modelInput.value;
    const owner = ownerInput.value;
    const color = colorInput.value;

    // New car object created every time user input data
    const car = new Car(license, maker, model, owner, price, color);

    // Adding to the cars arrays for furhter use
    cars.push(car);

    // Clear the input area after the car has been added to the arrays
    licenseInput.value = "";
    makerInput.value = "";
    modelInput.value = "";
    ownerInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    const warnMsg = document.querySelector(".warning-message");
    warnMsg.style.display = "none";
    console.log(cars);
  } catch (error) {
    const warnMsg = document.querySelector(".warning-message");
    // Show the warning message for empty input
    warnMsg.textContent = error.message;
    warnMsg.style.color = "red";
  }
};

const displayCarData = () => {
  // Clear existing table
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  addCarData();

  const makeElement = (row, col, prop) => {
    col.textContent = prop;
    return row.appendChild(col);
  };

  cars.forEach((car) => {
    // create new row for each of the car object
    const row = document.createElement("tr");
    const licenseCell = document.createElement("td");
    const makerCell = document.createElement("td");
    const modelCell = document.createElement("td");
    const ownerCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const colorCell = document.createElement("td");

    // const inputs = [licenseCell, modelCell, ownerCell, priceCell, colorCell];

    makeElement(row, licenseCell, car.license);
    makeElement(row, makerCell, car.maker);
    makeElement(row, modelCell, car.license);
    makeElement(row, ownerCell, car.owner);
    makeElement(row, priceCell, car.price);
    makeElement(row, colorCell, car.color);


    // const licenseCell = document.createElement("td");
    // licenseCell.textContent = car.license;
    // row.appendChild(licenseCell);

    // const makerCell = document.createElement("td");
    // makerCell.textContent = car.maker;
    // row.appendChild(makerCell);

    // const modelCell = document.createElement("td");
    // modelCell.textContent = car.model;
    // row.appendChild(modelCell);

    // const ownerCell = document.createElement("td");
    // ownerCell.textContent = car.owner;
    // row.appendChild(ownerCell);

    // const priceCell = document.createElement("td");
    // priceCell.textContent = car.price;
    // row.appendChild(priceCell);

    // const colorCell = document.createElement("td");
    // colorCell.textContent = car.color;
    // row.appendChild(colorCell);

    tableBody.appendChild(row);
  });
};

// 'click' event on the add button that prevents the default methods, display the car data in the console for now
carAddbtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayCarData();
});
