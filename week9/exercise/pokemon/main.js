let pokemons = [];
const fetchData = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data = await response.json(); // make the string to json
  // get the name from inside the results of the api
  pokemons.push(...data.results);
  displayData(data.results);
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector(".pokemons");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>`;
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

const searchPokemons = (search) => {
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  displayData(filteredData);
};

document.querySelector("#searchInput").addEventListener("input", (e) => {
  searchPokemons(e.target.value);
});
