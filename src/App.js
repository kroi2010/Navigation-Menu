import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Menu from './js/components/Menu/Menu';
import logo from './assets/img/logo.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #fff;
  }

  * {
    box-sizing: border-box;
    font-family: 'Calibri', sans-serif;
    color: #000;
    letter-spacing: 1px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  margin: 15px 0;
  width: 125px;
`;

function App() {
  return (
    <StyledHeader className="App">
      <GlobalStyle />
      <StyledLogo src={logo} />
      <Menu />
    </StyledHeader>
  );
}

export default App;
