const nameInput = document.querySelector("#cName");

const placeOrder = document.querySelector(".place-order");

const cutomerName = document.querySelector(".customer-name");

function displayOrder(event) {
  let randOrderNum = Math.floor(Math.random() * 100);
  event.preventDefault();
  cutomerName.textContent = nameInput.value;
}

placeOrder.addEventListener("click", displayOrder);
