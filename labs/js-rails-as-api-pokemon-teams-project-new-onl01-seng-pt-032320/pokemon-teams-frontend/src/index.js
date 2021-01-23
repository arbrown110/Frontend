document.addEventListener('DOMContentLoaded', function() {
    fetchTrainers();
})

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const fetchTrainers = () => {

    fetch(TRAINERS_URL)
    .then((response) => response.json())
    .then((data) => renderTrainerAndPokemon(data)) 
}

const renderTrainerAndPokemon = (trainers) => {

    const trainerCollection = document.getElementsByTagName("main")[0];
    trainers.map((trainer) => {
        const trainerDivCard = document.createElement('div');
        trainerDivCard.classList.add('card');

        const h2TrainerName = document.createElement("h2");
        h2TrainerName.textContent = trainer.name;
        trainerDivCard.appendChild(h2TrainerName);

        const addPokemonButton = document.createElement("button");
        addPokemonButton.dataset.trainerId = trainer.id;
        addPokemonButton.textContent = "Add Pokemon";
        addPokemonButton.addEventListener('click', addPokemon);
        trainerDivCard.appendChild(addPokemonButton);

        const pokemonUl = document.createElement("ul");
        pokemonUl.id = trainer.id;
        trainer.pokemons.forEach(pokemon => {
            const pokemonNameSpecies = document.createElement("li");
            pokemonNameSpecies.textContent = `${pokemon.nickname} (${pokemon.species})`;
            pokemonNameSpecies.id = `pokemon-li-${pokemon.id}`;

            const releasePokemonButton = document.createElement("button");
            releasePokemonButton.classList.add("release");
            releasePokemonButton.dataset.pokemonId = pokemon.id;
            releasePokemonButton.textContent = "Release";
            releasePokemonButton.addEventListener('click', function (event) {
                fetch(`${POKEMONS_URL}/${event.target.dataset.pokemonId}`,  {
                    method: "DELETE"
                })
                .then(response => response.json())
                .then(pokemon => {
                    const li = document.getElementById(`pokemon-li-${pokemon.id}`)
                    li.remove();
                })
            })
            pokemonNameSpecies.appendChild(releasePokemonButton);
            pokemonUl.appendChild(pokemonNameSpecies)
            trainerDivCard.appendChild(pokemonUl);
        });
        trainerCollection.appendChild(trainerDivCard);
    })
}
const addPokemon = (event) => {
    const trainerId = event.target.dataset.trainerId;
    console.log(event.target.dataset.trainerId, "button clicked");

    fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'applicaiton/json'
        },
        body: JSON.stringify({
            pokemon: {
                trainerId: trainerId
            }
        })
    })
        .then(response => response.json())
        .then(pokemon => {
            const ul = document.getElementById(trainerId);

            const pokemonNameSpecies = document.createElement("li");
            pokemonNameSpecies.textContent = `${pokemon.nickname} (${pokemon.species})`;

            const releasePokemonButton = document.createElement("button");
            releasePokemonButton.classList.add("release");
            releasePokemonButton.dataset.pokemonId = pokemon.id;
            releasePokemonButton.textContent = "Release";
            releasePokemonButton.addEventListener('click', function (event) {
                // console.log(event.target.dataset.pokemonId, "button clicked");
                fetch(`${POKEMONS_URL}/${event.target.dataset.pokemonId}`, {
                    method: "DELETE"
                })
                    .then(console.log)
            })
            pokemonNameSpecies.appendChild(releasePokemonButton);
            ul.appendChild(pokemonNameSpecies)
        })
}