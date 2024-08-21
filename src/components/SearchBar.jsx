import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin-left: 2px;
  max-width: 400px;
  font-size: 16px;
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Buscar Pokémon..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
