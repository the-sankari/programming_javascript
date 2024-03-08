// async function that
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
  const container = document.querySelector("#data_container");

  data.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.innerHTML = `<h2 class="title">${user.name}</h2>
      <p >${user.email}</p>
      <p >${user.address.street}</p>`;
    container.appendChild(userElement);
  });
};


