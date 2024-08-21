import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Pokedex from './containers/Pokedex';
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Pokedex />
  </ThemeProvider>
);

export default App;
