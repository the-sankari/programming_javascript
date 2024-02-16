const form = document.querySelector(".form-container");
const makeOrderButton = document.querySelector("#make-order");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");

let total;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);
  checkToppings();
  totalPriceElement.textContent = `$${total}`;

  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

const addItem = (itemName, category) => {
  if (category == "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }

  // console.log(`Item Name: ${itemName}`);
  // console.log(`Category: ${category}`);
};

const removeItem = () => {};

const checkToppings = () => {
  toppings = [];
  extras = [];

  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;
    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
  console.log(`Toppings: ${toppings}`);
  console.log(`Extras: ${extras}`);
};

const displayOrder = () => {
  const customerName = document.querySelector("#customer-name").value;
  const orderInfo = document.querySelector(".order-info");

  const orderName = document.querySelector("#order-cName");
  const orderType = document.querySelector("#order-type");
  const orderToppings = document.querySelector("#order-toppigs");
  const orderExtras = document.querySelector("#order-extras");
  const orderTotal = document.querySelector("#order-total");

  orderName.textContent = customerName;
  orderType.textContent = typeSelect.option[selectedIndex].textContent;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderTotal.textContent = `€${total}`;
};

form.addEventListener("change", pancakePriceCalc);
makeOrderButton.addEventListener("click", displayOrder);
