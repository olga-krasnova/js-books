import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Gotham A', 'Gotham B', 'Gotham HTF', 'Gotham', Helvetica,
      sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
  
  select,
  input,
  textarea {
    font-family: 'Gotham A','Gotham B','Gotham HTF','Gotham',Helvetica, sans-serif;
  }
  
  input:focus {
    outline: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: bold;
  }
  
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: -0.035em;
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
  }
  
  a, button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
