let pokemons = [];
// const fetchData = async () => {
//   const response = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
//   );
//   const data = await response.json(); // make the string to json

//   // get the name from inside the results of the api
//   pokemons.push(...data.results);
//   displayData(data.results);
// };

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
    .then((response) => response.json())
    .then((json) => {
      // get each element and data with maping
      const fetches = json.results.map((item) => {
        return fetch(item.url).then((res) => res.json());
      });
      Promise.all(fetches).then((data) => {
        pokemons = data;
        displayData(pokemons);
        console.log(pokemons);
      });
      // pokemons = json.results;
    })
    .catch((error) => console.error(error));
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector(".pokemons");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>
    <p>Height: ${pokemon.height/10} m</p>
    <p>Weight: ${pokemon.weight/10} kg</p>
    `;
    container.appendChild(pokemonCard);
  });
};

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const searchPokemons = debounce((search) => {
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  displayData(filteredData);
}, 300);

document.querySelector("#searchInput").addEventListener("input", (e) => {
  searchPokemons(e.target.value);
});
