import { createGlobalStyle } from "styled-components";
import * as palette from './ThemeVariables.js';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Ubuntu', sans-serif;
        letter-spacing: 1px;
        background: ${palette.backgroundColor};
        max-width: 1000px;
        margin: auto;
        @media (max-width: 750px){
            font-size: 90%;
        } 
        @media (max-width: 450px){
            font-size: 80%;
        } 
    }
    body {
        font-family: 'Ubuntu', sans-serif;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    button, a, label, input, textarea {
        font-family: 'Ubuntu', sans-serif;
        letter-spacing: 1px;
        padding: 2px;
        border-radius: 4px;
    }
`;

export default GlobalStyles;