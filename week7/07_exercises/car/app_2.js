"use strict";

const addCarForm = document.querySelector("#add-car-form");
const searchForm = document.querySelector("#serach-car-form");
const cars = [];

// Car class to make tamplate of car data
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

const addCarData = (e) => {
  e.preventDefault();

  try {
    const license = document.querySelector("#license").value;
    const maker = document.querySelector("#maker").value;
    const model = document.querySelector("#model").value;
    const owner = document.querySelector("#owner").value;
    const price = document.querySelector("#price").value;
    const color = document.querySelector("#color").value;

    const newCar = new Car(license, maker, model, owner, price, color);

    if (!license || !maker || !owner || !price || !color || !model) {
      throw new Error("Something went wrong!");
    }
    // get the new car inside the cars array for reuse
    cars.push(newCar);
    console.table(cars);
    // displayCarTable();
    displayTable();
    // Reset the form inputs after car data added
    addCarForm.reset();
  } catch (error) {
    console.error(error);
  }
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");

  table.innerHTML = table.rows[0].innerHTML;
  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};


const searchCar = (e) => {
  e.preventDefault();
  const licenceQuery = document
    .querySelector("#license-search")
    .value.trim()
    .toLowerCase();

  const display = document.querySelector("#searchResult");

  if (!licenceQuery) {
    display.textContent = "Please enter a license plate to search";
    return;
  }

  try {
    const result = cars.find(({ licence }) =>
      licence.toLowerCase().includes(licenceQuery)
    );

    display.textContent = result
      ? `Found ${result.maker}, ${result.model}, owned by ${result.owner} `
      : "No car with that license plate";
  } catch (error) {
    console.error("Error occured:", error);
    display.textContent = "Something went wrong, try again";
  }
};
searchForm.addEventListener("submit", searchCar);
addCarForm.addEventListener("submit", addCarData);
