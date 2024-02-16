const forms = document.querySelector(".form-container");

const priceCal = () => {
  console.log("form event");
  const typeSelect = document.querySelector("#type");
  const checkBoxes =  document.querySelectorAll('input[type="checkbox"]'); // use double coat

  const bannerDisplay = document.querySelector("#totalPriceBanner");

  let totalAmount = parseInt(typeSelect.value);


  checkBoxes.forEach((e)=>{
    console.log(`checkboxes: ${e.value}`);
  })






  // for (const checkbox of checkBoxes) {
  //   if (checkbox.checked) {
  //     console.log(`Checkbox: ${checkbox.value}`);
  //     totalAmount += parseInt(checkbox.value);
  //   }
  // }
  console.log(totalAmount);

  bannerDisplay.textContent = `€${totalAmount}`;
};

forms.addEventListener("change", priceCal);
