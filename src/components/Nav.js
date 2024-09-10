// router
import { Link } from "react-router-dom"

// redux
import { connect } from "react-redux";

// styles
import styled from 'styled-components';
import * as palette from '../ThemeVariables.js';

const Nav = ({games}) => {
  
  if(games){
    return (
      <StyledNav>
        <Link to="/">Football Forecast</Link>
        <h3>2024 Season</h3>
        {
          games[0]
          ? <h2>Week {games[0].GameData.Week}</h2>
          : <></>
        }
      </StyledNav>
    )
  }

  return (
    <StyledNav>
      <Link to="/">Football Forecast</Link>
      <h3>2024 Preseason</h3>
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
    font-family: "Bebas Neue", sans-serif;
    font-size: 3em;
    color: ${palette.accentColor};
    font-weight: ${palette.titleWeight};
    text-shadow: 1px 1px black;
  }
  h3 {
    font-size: ${palette.labelSize};
    font-weight: 400;
    color: ${palette.titleColor};
    font-family: "Bebas Neue", sans-serif;
  }
  h2 {
    font-size: ${palette.titleSize};
    font-weight: 400;
    color: ${palette.titleColor};
    font-family: "Bebas Neue", sans-serif;
  }
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Nav);