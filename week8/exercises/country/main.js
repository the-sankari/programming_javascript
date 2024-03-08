// async function that
const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`Error status: ${response.status} `);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};


fetchData();
const displayData = (data) => {
  console.log(data);
  const container = document.querySelector("#data_container");

  data.forEach((country) => {
    const countryElement = document.createElement("div");
    countryElement.innerHTML = `<h2 class="title">Country: ${country.name.common}</h2>
      <p >Official name:${country.name.official}</p>
      <p >Capital: ${country.capital}</p>`;
    container.appendChild(countryElement);
  });
};


