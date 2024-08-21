export const getPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();

    const detailedPokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json();

        return {
          name: pokemon.name.toUpperCase(),
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
          type: pokemonDetails.types.map((typeInfo) => typeInfo.type.name).join(', '),
          weight: pokemonDetails.weight / 10,
        };
      })
    );
    console.log("Data que viene: ", detailedPokemonList)
    return detailedPokemonList;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
