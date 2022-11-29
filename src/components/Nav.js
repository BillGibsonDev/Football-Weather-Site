// router
import { Link } from "react-router-dom"

// styles
import styled from 'styled-components';
import * as palette from '../ThemeVariables.js';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Football Weather</Link>
      <h2>Week 13</h2>
      <h3>Kickoff Forecasts</h3>
    </StyledNav>
  )
}

const StyledNav  = styled.nav`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  text-align: center;
  a {
    font-size: 2.5em;
    color: ${palette.accentColor};
  }
  h2 {
    font-size: 2em;
    font-weight: 400;
    color: ${palette.titleColor};
  }
  h3 {
    font-size: 1.5em;
    font-weight: 400;
    color: ${palette.helperGrey};
  }
`;