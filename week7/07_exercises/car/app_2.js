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

  const newCar = new Car(
    license.value,
    maker.value,
    model.value,
    owner.value,
    price.value,
    color.value
  );
  // get the new car inside the cars array for reuse
  cars.push(newCar);
  console.table(cars);

  // Reset the form inputs after car data added
  addCarForm.reset();
};

addCarForm.addEventListener("submit", addCarData);
