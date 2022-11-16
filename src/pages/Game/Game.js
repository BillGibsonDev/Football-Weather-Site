// router
import { useParams } from "react-router-dom";

// styles
import styled from 'styled-components';
import * as palette from '../../ThemeVariables.js';

// components
import { GameWeather } from "./components/GameWeather";
import { GameDetails } from "./components/GameDetails";

// redux
import { connect } from 'react-redux';

const Game = ({games}) => {

  const { scoreId } = useParams();

  return (
    <StyledGame>
      <section className="game-wrapper">
        {
          games.filter(game => game.ScoreID === Number(scoreId)).map((game, key) => {
            return (
              <>
                <GameDetails
                  game={game}
                  key={key}        
                />
                {
                  game.Stadium.State === '' || game.Stadium.State === null
                  ? <h5 className="city">{game.Stadium.City}, {game.Stadium.Country}</h5>
                  : <h5 className="city">{game.Stadium.City}, {game.Stadium.State}, {game.Stadium.Country}</h5>
                }
                <GameWeather
                  weather={game.Weather}
                />
              </>
            )
          })
        }
      </section>
    </StyledGame>
  )
}

const StyledGame = styled.div`
  width: 80%;
  margin: auto;
  nav {
    a {
      font-size: 2.5em;
      font-weight: 400;
    }
  }
  .game-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      font-size: 1.2em;
    }
  }
  .city {
    text-align: center;
    color: ${palette.titleColor};
    margin-bottom: 20px;
  }
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Game);