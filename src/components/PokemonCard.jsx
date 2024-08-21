import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  color: #000000;
  font-weight: bold;
  padding: 2px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  padding-top: 15px;
`;

const PokemonCard = ({ name, image, type, weight, onClick }) => (
  <Card onClick={onClick}>
    <ImageContainer>
      <Image src={image} alt={name} width="100" />
    </ImageContainer>
    <Text>{name}</Text>
    <TextContainer>
      <Text>{type}</Text>
      <Text>{weight}kg</Text>
    </TextContainer>
  </Card>
);

export default PokemonCard;
