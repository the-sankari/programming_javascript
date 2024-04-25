// Initialize an empty array to store the pokemons
let pokemons = [];

// Fetch data from the Pokemon API
const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then((response) => response.json())
    .then((json) => {
      // Get each element and data with mapping
      const fetches = json.results.map((item) => {
        return fetch(item.url).then((res) => res.json());
      });
      Promise.all(fetches).then((data) => {
        pokemons = data;
        displayData(pokemons);
      });
    })
    .catch((error) => console.error(error));
};

// Call the fetchData function to fetch data from the Pokemon API
fetchData();

// Display the pokemons in a grid
const displayData = (data) => {
  const container = document.querySelector(".pokemons");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    const imageUrl =
      pokemon.sprites.other.dream_world.front_default ??
      pokemon.sprites.other["official-artwork"].front_default ??
      "image.png";
    const isFavorite = localStorage.getItem(pokemon.name) === "true";

    const favoriteText = isFavorite ? "Unmark favorite" : "Mark favorite";
    pokemonCard.innerHTML = `
    <div class="card col" style="width: 18rem;">
    <img height=120; src="${imageUrl}"
    alt="${pokemon.name}" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title name">${pokemon.name}</h5>
      <p class="card-text">Height: ${pokemon.height / 10} m</p>
      <p class="card-text">Weight: ${pokemon.weight / 10} kg</p>
      <button  class="btn btn-dark" data-id="favButton" data-name="${
        pokemon.name
      }">${favoriteText}</button>
    </div>
  </div>`;
    container.appendChild(pokemonCard);
  });
  addFavorite();
};

// Toggle the favorite status of a pokemon
const toggleFavorite = (e) => {
  const pokemonName = e.target.getAttribute("data-name");
  const isFavorite = localStorage.getItem(pokemonName) === "true";
  localStorage.setItem(pokemonName, !isFavorite);
};

// Add event listeners to the favorite buttons
const addFavorite = () => {
  const favButton = document.querySelectorAll("[data-id='favButton']");
  favButton.forEach((button) => {
    button.addEventListener("click", toggleFavorite);
  });
};

// Debounce function to limit the rate of function calls
const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

// Search for pokemons
const searchPokemons = debounce((search) => {
  if (!search) {
    displayData(pokemons);
    return;
  }
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  displayData(filteredData);
}, 300);

// Add an event listener to the search input
document.querySelector("#searchInput").addEventListener("input", (e) => {
  searchPokemons(e.target.value);
});

// Show only the favorite pokemons
const showFavorites = () => {
  const favoritePokemons = pokemons.filter(
    (pokemon) => localStorage.getItem(pokemon.name) === "true"
  );
  displayData(favoritePokemons);
};

// Add an event listener to the "Show Favorites" button
document.querySelector("#show").addEventListener("click", showFavorites);

// Check if localStorage is available
if (typeof localStorage === "undefined") {
  console.error("localStorage is not available");
}
// Add a "Show All" button that shows all the items
const showAll = () => {
  // Call the displayData function with the pokemons array as an argument
  displayData(pokemons);
};

// Add a "Clear Favorites" button that clears the favorite items list
const clearFavorites = () => {
  // Clear the local storage
  localStorage.clear();
  // Remove each pokemon's favorite status from the local storage
  pokemons.forEach((pokemon) => {
    localStorage.removeItem(pokemon.name);
  });
  // Call the displayData function with the pokemons array as an argument
  displayData(pokemons);
};

// Add an event listener to the "Clear Favorites" button
document
  .querySelector("#clearFavorites")
  .addEventListener("click", clearFavorites);

// Add a "Show All" button that shows all the items
document.querySelector("#showAll").addEventListener("click", showAll);
