import { useEffect } from "react";
// styles
import styled from "styled-components";

// components
import { Game } from './components/Game';

// redux
import { connect, useDispatch } from 'react-redux';
import { getGames } from '../../redux/actions/games.js';

const Home = ({games}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch])

  return (
    <StyledHome>
      <div className="games-wrapper">
        {
          !games
          ? <></>
          : <>
            {
              games.filter(game => game.AwayTeam !== 'BYE').filter(game => game.Status === "Scheduled" || game.Status === 'InProgress').map((game, key) => {
                return (
                  <Game
                    game={game}
                    key={key}
                  />
                )
              })
            }
          </>
        }
        </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .games-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    @media screen and (max-width:1110px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Home);