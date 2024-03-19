let pokemons = [];
const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
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
    const imageUrl =
      pokemon.sprites.other.dream_world.front_default ??
      pokemon.sprites.other["official-artwork"].front_default ??
      "image.png";
    const isFavorite = localStorage.getItem(pokemon.name) === "true";

    const favoriteText = isFavorite ? "Unmark favorie" : "Mark favorite";
    pokemonCard.innerHTML = `
    <h2 class="name">${pokemon.name}</h2>
    <img height="100"
    src="${imageUrl}"
    alt="${pokemon.name}"
  />
  <div class="desc">
    <p>Height: ${pokemon.height / 10} m</p>
    <p>Weight: ${pokemon.weight / 10} kg</p>
    <button id="favButton" data-name="${pokemon.name}">${favoriteText}</button>
  </div>
    `;
    container.appendChild(pokemonCard);
  });
  addFavorite();
};

const toggleFavorite = (e) => {
  const pokemonName = e.target.getAttribute("data-name");
  const isFavorite = localStorage.getItem(pokemonName) === "true";
  localStorage.setItem(pokemonName, isFavorite);
  console.log(pokemonName);
};

const addFavorite = () => {
  const favButton = document.querySelectorAll("#favButton");
  favButton.forEach((button) =>{
    button.addEventListener("click", toggleFavorite);
  
  }

  );
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
