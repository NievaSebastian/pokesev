import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Navbar = () => (
  <Nav>
    {/* WIP links de navegación */}
  </Nav>
);

export default Navbar;
