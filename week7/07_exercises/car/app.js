"use strict";

const addCarForm = document.querySelector("#add-car-form");
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

  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  //   create new car object
  const newCar = new Car(license, maker, model, owner, price, color);

  // get the new car inside the cars array for reuse
  cars.push(newCar);
  console.table(cars);

  displayTable();
  // Reset the form inputs after car data added
  addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");

//   table.innerHTML = table.rows[0].innerHtml;
  cars.forEach((car) => {
    const row = table.insertRow(1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

addCarForm.addEventListener("submit", addCarData);
