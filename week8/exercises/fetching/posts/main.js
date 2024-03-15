// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => displayData(json));
// };

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};

console.log(fetchData());
const displayData = (data) => {
  const container = document.querySelector("#data_container");
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h2 class="title">${post.title}</h2>
    <p >${post.body}</p>`;
    container.appendChild(postElement);
  });
};

displayData();

