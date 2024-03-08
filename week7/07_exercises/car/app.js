"use strict";

const addCarForm = document.querySelector("#add-car-form");
console.log("Add car is triggered");
const searchCarForm = document.querySelector("#serach-car-form");
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

    if (!license || !maker || !model || !owner || !price || !color) {
      throw new Error("input field should not be empty");
    }
    //   create new car object
    const newCar = new Car(license, maker, model, owner, price, color);

    // get the new car inside the cars array for reuse
    cars.push(newCar);
    console.table(cars);

    displayTable();
    // Reset the form inputs after car data added
    addCarForm.reset();
  } catch (error) {
    console.error("Somethiing went wrong, try again!! ", error.message);
  }
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");

  //   table.innerHTML = table.rows[0].innerHtml;
  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCarByLicense = (e) => {
  const displaySearch = document.querySelector("#searchResult");

  e.preventDefault();
  try {
    const searchInput = document
      .querySelector("#license-search")
      .value.trim()
      .toLowerCase();

    if (!searchInput) {
      throw new Error("Please provide a license number!!");
    }

    const result = cars.find(({ license }) =>
      license.toLowerCase().includes(searchInput)
    );

    displaySearch.textContent = result
      ? `Found ${license.maker}, ${license.model}, owned by ${license.owner} `
      : "No car with that license plate";

    console.log(displaySearch.textContent);
  } catch (error) {
    displaySearch.textContent = error.message;
    displaySearch.style.color = "red";
    console.error(error.message);
  }
};

addCarForm.addEventListener("submit", addCarData);
searchCarForm.addEventListener("submit", searchCarByLicense);
