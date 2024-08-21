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
`;

const Text = styled.div`
  color: #000000;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  padding-top: 15px;
`;

const PokemonCard = ({ name, image }) => (
  <Card>
    <ImageContainer>
        <Image src={image} alt={name} width="100"/>
    </ImageContainer>
    <Text>{name}</Text>
  </Card>
);

export default PokemonCard;
