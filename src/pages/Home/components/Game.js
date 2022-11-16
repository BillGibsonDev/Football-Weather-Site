// components
import { Weather } from "./Weather";
import { GameDetails } from "./GameDetails";

// router
import { Link } from 'react-router-dom';

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js';

export const Game = ({game}) => {

  return (
    <StyledGame>
      <GameDetails
        game={game}
      />
      {
        !game.Weather[0]
        ? <h3>No Forecast Yet</h3>
        :
          <Weather
            game={game}
            weather={game.Weather[0]}
          />
        }
      <Link to={`/games/${game.ScoreID}`} className="game-link">More Info</Link>
    </StyledGame>
  );
}

const StyledGame = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${palette.accentColor};
  margin: 20px 0;
  padding: 12px;
  width: 100%;
  .game {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .game-link {
    font-size: 1.2em;
    margin-top: 6px;
  }
  a {
    text-align: center;
    color: ${palette.accentColor2};
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  h3 {
    text-align: center;
    color: ${palette.labelColor};
  }
`;