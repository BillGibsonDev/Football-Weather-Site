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
  border: 1px solid ${palette.fadedWhite};
  width: 100%;
  border-radius: 4px;
  height: auto;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: -2px 2px 2px #00000081;
  &:hover, &:focus {
    background: #00000084;
    transform: scale(1.005);
    box-shadow: -2px 2px 2px ${palette.accentColor};
  }
  .game-link {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .game {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h3 {
    margin: 20px auto;
    text-align: center;
    color: ${palette.accentColor};
  }
`;