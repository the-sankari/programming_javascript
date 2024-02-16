const cakeType = document.querySelector("#type");

// Select all the input element with check box
const topping = document.querySelectorAll('input[type="checkbox"]');

const displayPrice = document.querySelector("#totalPriceDisplay");
const displayPriceBanner = document.querySelector("#totalPriceBanner");

let basePrice = parseInt(cakeType.value);

// On change method and get integer value of selected element
cakeType.addEventListener("change", () => {
  basePrice = parseInt(cakeType.value);
  //   console.log(`Base price: €{basePrice}`);
  updateCal();
});

// updated the calculation on change of checkbox
topping.forEach((input) => {
  input.addEventListener("change", updateCal);
});

// claculate the price based on different types
function updateCal() {
  // assign base price to total variable
  let total = basePrice;

  // get each integer value of checkbox and add to the total price
  topping.forEach((input) => {
    let toppingPrice = parseInt(input.value);
    if (input.checked) {
      return (total += toppingPrice);
    }
  });
  //   console.log(`Total price: €{total}`);

  // Display the total price
  displayPrice.textContent = `€${total}`;
  displayPriceBanner.textContent = `€${total}`;
  displayPriceBanner.classList.add("animate");
  displayPriceBanner.style.display = "block";

  // Reset animation after it finishes
  setTimeout(() => {
    displayPriceBanner.classList.remove("animate");
  }, 2000);
}
