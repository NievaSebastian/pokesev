import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { getPokemonList } from '../services/api';
import PokemonPopup from '../components/PokemonPopup';

const PokedexContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonList(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando PokeSev...</p>;

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClosePopup = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <PokedexContainer>
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard 
            key={pokemon.name} 
            name={pokemon.name} 
            image={pokemon.image} 
            type={pokemon.type} 
            weight={pokemon.weight} 
            onClick={() => handleCardClick(pokemon)}
          />
        ))}
      </PokedexContainer>
      {selectedPokemon && (
        <PokemonPopup 
          pokemon={selectedPokemon} 
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
};

export default Pokedex;
