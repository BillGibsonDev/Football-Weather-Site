// components
import { Weather } from "./Weather";
import { GameDetails } from "./GameDetails";

// router
import { Link } from 'react-router-dom';

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js';

export const Game = ({game}) => {

  if(!game.GameDayWeather){
    return (
      <StyledGame>
        <Link to={`/games/${game.GameData.ScoreID}`} className="game-link">
          <GameDetails game={game.GameData} />
          <h3>No Forecast Yet</h3>
        </Link>
      </StyledGame>
    );
  }

  return (
    <StyledGame>
      <Link to={`/games/${game.GameData.ScoreID}`} className="game-link">
        <GameDetails game={game.GameData} />
        <Weather game={game.GameData} weather={game.GameDayWeather} /> 
      </Link>
      <Link to={`/games/${game.GameData.ScoreID}`} className="text-game-link">Full Forecast</Link>
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
  background: #00000084;
  &:hover, &:focus {
    transform: scale(1.005);
    box-shadow: -2px 2px 2px ${palette.fadedWhite};
  }
  .game-link {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .text-game-link {
    text-align: center;
    width: 100%;
    padding: 10px 0;
    color: ${palette.accentColor};
    border-radius: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: 0.2s;
    font-weight: ${palette.titleWeight};
    display: inline-block;
    text-shadow: .5px .5px ${palette.accentColor2};
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  .game {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h3 {
    margin: 20px auto;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 1em;
  }
`;