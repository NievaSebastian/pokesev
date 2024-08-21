import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { getPokemonList } from '../services/api';

const PokedexContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPokemonList().then((data) => setPokemonList(data.results));
    console.log("pokemonList: ", pokemonList)
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <PokedexContainer>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
        ))}
      </PokedexContainer>
    </>
  );
};

export default Pokedex;
