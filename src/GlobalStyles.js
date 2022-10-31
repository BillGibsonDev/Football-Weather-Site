import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 1px;
        @media (max-width: 1450px){
            font-size: 90%;
        }
        @media (max-width: 750px){
            font-size: 80%;
        } 
    }
    body {
        font-family: 'Roboto Mono', monospace;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    button, a, label, input, textarea {
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 1px;
        padding: 2px;
        border-radius: 4px;
    }
`;

export default GlobalStyles;