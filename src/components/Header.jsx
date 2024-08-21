import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Header = () => (
  <HeaderContainer>
    <h1>PokeSev</h1>
  </HeaderContainer>
);

export default Header;
