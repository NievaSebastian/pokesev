import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
`;

const SearchBar = ({ value, onChange }) => (
  <Input 
    type="text" 
    placeholder="Buscar Pokémon..." 
    value={value} 
    onChange={onChange} 
  />
);

export default SearchBar;
