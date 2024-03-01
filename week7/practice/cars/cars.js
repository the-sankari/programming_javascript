// 'use strict'

const addCars = document.querySelector("#addCar");
const tableBody = document.querySelector('.car-table-body');
const cars = [];

class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = price;
    this.color = color;
  }
}

const displayCar = () => {
  const licensePlate = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const currentOwner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  const car = new Car(licensePlate, maker, model, currentOwner, price, color);
  cars.push(car);
  console.log(cars);
  displayCarList();
};


const displayCarList =()=>{
    const list = document.querySelector('.list');
    cars.forEach(car=>{
      let p =   document.creatElement('p').texContent = car;
        list.appendChild(p);
    })
}



addCars.addEventListener("click", (e) => {
  e.preventDefault();
  displayCar();
});
