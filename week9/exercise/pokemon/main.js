const searchForm = document.querySelector(".serchPokemon");
let pokemons = [];
const fetchPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data = await response.json();
  // get the name from inside the results of the api
  displayData(data.results);
  pokemons.push(...data.results);
};
fetchPokemon();


const displayData = (data) => {
  const container = document.querySelector(".pokemons");
  data.forEach((pokemon) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.innerHTML = `<h2 class="name">${pokemon.name}</h2>`;
    container.appendChild(pokemonElement);
  });
};

const searchPokemon = (e) => {
  e.preventDefault();
  const pokemonSearch = document
    .querySelector("#searchInput")
    .value.trim()
    .toLowerCase();
  const displaySearch = document.querySelector(".searchResult");
  if (!pokemonSearch) {
    displaySearch.textContent = "Please enter a pokemon name";
    displaySearch.style.color = "red";
  }

  const result = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonSearch)
  );
  console.log(result.name);

  //   displaySearch.textContent = result[0].name;
};

searchForm.addEventListener("submit", searchPokemon);
