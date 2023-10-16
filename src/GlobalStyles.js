import { createGlobalStyle } from "styled-components";
import * as palette from './ThemeVariables.js';
import Background from './assets/patrick-ogilvie-GB9XKDZWwp0-unsplash.jpg'

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
        background-color:#000000;
        position: relative;
        width: 100%;
        margin: auto;
        min-height: 100vh;
        @media (max-width: 750px){
            font-size: 90%;
        } 
        @media (max-width: 450px){
            font-size: 80%;
        } 
        &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 1000px;
            height: 100%;
            background: url(${Background});
            background-size: cover;
            background-position: center;
            opacity: 0.35;
            z-index: -1; 
        }
    }
    body {
        border-radius: 4px;
        font-family: 'Ubuntu', sans-serif;
        background: ${palette.backgroundColorTransparent};
        padding: 2em 0;
        margin: 2em auto;
        min-height: 90vh;
        height: 100%;
        max-width: 900px;
        width: 100%;
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