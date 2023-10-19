import { createGlobalStyle } from "styled-components";
import * as palette from './ThemeVariables.js';
import Background from './assets/backgroundFieldImage.jpg';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
        background-color:#000000;
        width: 100%;
        margin: auto;
        &:before {
            content: "";
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 1000px;
            height: 100%;
            background: url(${Background});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            opacity: 0.35;
            z-index: -1; 
        }
        @media (max-width: 750px){
            font-size: 90%;
        } 
        @media (max-width: 450px){
            font-size: 80%;
        } 
    }
    body {
        border-radius: 4px;
        font-family: 'Nunito', sans-serif;
        background: ${palette.backgroundColorTransparent};
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
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
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
        padding: 2px;
        border-radius: 4px;
    }
    a {
        padding: 0;
    }
    h4 {
        font-size: 1.2em;
        color: ${palette.titleColor};
        font-weight: ${palette.titleWeight};
    }
    h5 {
        font-size: 1em;
        color: ${palette.titleColor};
        font-weight: ${palette.titleWeight};
    }
    h6 {
        color: ${palette.titleColor};
        font-size: .9em;
        font-weight: 400;
    }
`;

export default GlobalStyles;