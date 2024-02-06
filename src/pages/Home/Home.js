import { useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import styled from "styled-components";

// components
import { Game } from './components/Game';
// import { Loader } from '../../components/Loader';

// redux
import { connect, useDispatch } from 'react-redux';
import { getGames } from '../../redux/actions/games.js';
import { HelmetComponent } from "../../components/HelmetComponent";

const Home = ({games}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [ dispatch ])

  if(!games || games) {
    return (
      // <Loader />
      <>
        <h1 style={{textAlign: 'center', color: 'white'}}>Thanks for a great season! See you next year!</h1>
        <Link className="offseason-btn" to={'/offseason'}>I'm here for the demo.</Link>
      </>
      
    )
  }

  const sortGamesByTime = (arr) => {
    arr.sort((a, b) => {
      let timeA = new Date(`${a.GameData.Date}`);
      let timeB = new Date(`${b.GameData.Date}`);
      return timeA - timeB;
    })
    return arr;
  }

  return (
    <StyledHome>
      <HelmetComponent game={games[0]? games[0].GameData : '' } home={true} />
      {
        sortGamesByTime(games).map((game, index) => {
          return (
            <Game
              game={game}
              key={index}
            />
          )
        })
      }
    </StyledHome>
  );
}

const StyledHome = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  gap: 10px;
  width: 90%;
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
  h1 {
    width: 100%;
    font-size: 1.5em;
    text-align: center;
    color: white;
  }
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Home);