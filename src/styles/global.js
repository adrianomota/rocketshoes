import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import backgeound from '../assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
     height: 100%;
  }
  body {
    background: #191920 url(${backgeound}) no-repeat center top;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Roboto, sans-serif;
  }
  button {
      cursor: pointer;
  }
`;

export default GlobalStyle;
