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
      <Link to={`/games/${game.GameData.ScoreID}`} className="game-link">
        <GameDetails
          game={game.GameData}
        />
        {
          !game.GameDayWeather
          ? <h3>No Forecast Yet</h3>
          : <>
              <Weather
                game={game.GameData}
                weather={game.GameDayWeather}
              />
            </>
        }
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${palette.accentColor};
  width: 100%;
  border-radius: 4px;
  height: auto;
  cursor: pointer;
  transition: 0.2s;
  &:hover, &:focus {
    background: black;
    transform: scale(1.01);
  }
  .game-link {
    width: 100%;
  }
  .game {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h3 {
    text-align: center;
    color: ${palette.labelColor};
  }
`;