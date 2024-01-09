// router
import { Link } from "react-router-dom"

// styles
import styled from 'styled-components';
import * as palette from '../ThemeVariables.js';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Football Forecast</Link>
      <h2>2023 Season</h2>
      <h2>Wildcard Weekend</h2>
    </StyledNav>
  )
}

const StyledNav  = styled.nav`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 20px auto;
  text-align: center;
  a {
    font-size: 2.5em;
    color: ${palette.accentColor};
    font-weight: ${palette.titleWeight};
    text-shadow: 1px 1px black;
  }
  h2 {
    font-size: ${palette.labelSize};
    font-weight: 400;
    color: ${palette.titleColor};
  }
`;