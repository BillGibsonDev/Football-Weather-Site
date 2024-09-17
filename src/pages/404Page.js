import styled from "styled-components";
import * as palette from '../ThemeVariables.js';
import { Link } from "react-router-dom";

export const UnknownPath = ({game}) => {
    if(game){
        return (
            <StyledPage>
                <h1>This game is no longer available.</h1>
                <h2>Games from previous days are deleted to save server space.</h2>
                <h2>Click here to return to the home page.</h2>
                <Link to={'/'}>Home</Link>
            </StyledPage>
        )
    }
  return (
    <StyledPage>
        <h1>404 Page Not Found</h1>
        <h2>It appears you are lost.</h2>
        <Link to={'/'}>Home</Link>
    </StyledPage>
  )
}

const StyledPage = styled.section`
display: flex;
flex-direction: column;
align-items: center;
    width: 100%;
    h1, h2 {
        width: 100%;
        text-align: center;
        color: white;
    }
    h1 {
        font-size: 2em;
        margin-top: 10vh;
    }
    h2 {
        font-size: 1.2em;
        max-width: 70vh;
        margin: 10px auto;
        font-weight: 400;
    }
    a {
        text-align: center;
        font-size: 1.2em;
        font-weight: 700;
        margin: 10px auto;
        color: white;
        width: 250px;
        padding: 10px 0;
        border-radius: 4px;
        background: ${palette.accentColor};
        transition: 0.2s;
        box-shadow: 1px 1px 4px black;
        &:hover {
            text-decoration: underline;
            background: black;
        }
    }
`;