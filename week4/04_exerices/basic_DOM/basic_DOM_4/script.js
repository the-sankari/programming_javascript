const cakeType = document.querySelector("#type");

// Select all the input element with check box
const topping = document.querySelectorAll("input");

const displayPrice = document.querySelector('#totalPriceDisplay');
const displayPriceBanner = document.querySelector('#totalPriceBanner');

let basePrice = parseInt(cakeType.value);
cakeType.addEventListener("change", () => {
  basePrice = parseInt(cakeType.value);
  console.log(`Base price: ${basePrice}`);
  updateCal();
});


topping.forEach((input) => {
  input.addEventListener("change", updateCal);
});

function updateCal() {
  let total = basePrice;
  topping.forEach(function (input) {
    let toppingPrice = parseInt(input.value);
    if (input.checked) {
      total += toppingPrice;
    }
  });
  console.log(`Total price: ${total}`);
  displayPrice.textContent = `$${total}`;
  displayPriceBanner.textContent = `$${total}`;
}
