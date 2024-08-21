import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-30px);
  opacity: 0;
  animation: fadeIn 0.3s forwards ease-in-out;

  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #000;
  }
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const PokemonName = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  color: #555;
`;

const PokemonType = styled.span`
  background-color: #ef5350;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const PokemonWeight = styled.span`
  font-size: 16px;
`;

const PokemonPopup = ({ pokemon, onClose }) => {

  let vamoACalmarno = (pokemon.name === "SQUIRTLE" ? true : false);

  return <Overlay>
    <PopupContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      {vamoACalmarno && "Vamo a calmarno"}
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonInfo>
        <PokemonType>{pokemon.type}</PokemonType>
        <PokemonWeight>{pokemon.weight} kg</PokemonWeight>
      </PokemonInfo>
    </PopupContainer>
  </Overlay>
}


export default PokemonPopup;
