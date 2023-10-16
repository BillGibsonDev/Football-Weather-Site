import { useEffect } from "react";
// styles
import styled from "styled-components";

// components
import { Game } from './components/Game';
import { Loader } from '../../components/Loader';

// redux
import { connect, useDispatch } from 'react-redux';
import { getGames } from '../../redux/actions/games.js';

const Home = ({games}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch])

  if(!games) {
    return (
      <Loader />
    )
  }

  return (
    <StyledHome>
      {
        games.map((game, index) => {
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
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Home);