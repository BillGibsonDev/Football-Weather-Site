import { useEffect } from "react";

// router
import { useParams } from "react-router-dom";

// styles
import styled from 'styled-components';
import * as palette from '../../ThemeVariables.js';

// components
import { HourlyWeather } from "./components/HourlyWeather.js";
import { GameDetails } from "./components/GameDetails";
import { GameDayWeather } from "./components/GameDayForecast.js";

// redux
import { connect, useDispatch } from 'react-redux';
import { getGames } from "../../redux/actions/games.js";
import { Loader } from "../../components/Loader.js";

const Game = ({ games }) => {

  const { scoreId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [ dispatch ])


  if(!games){
    return (
      <Loader />
    )
  }

  const game = games.find(game => game.GameData.ScoreID === Number(scoreId));

  return (
    <StyledGame>
      <GameDetails game={game} />
      {
        game.GameData.StadiumDetails.State === '' || game.GameData.StadiumDetails.State === null
        ? <h5 className="city">{game.GameData.StadiumDetails.City}, {game.GameData.StadiumDetails.Country}</h5>
        : <h5 className="city">{game.GameData.StadiumDetails.City}, {game.GameData.StadiumDetails.State}, {game.GameData.StadiumDetails.Country}</h5>
      }
      <GameDayWeather  weather={game.GameDayWeather} />
      <HourlyWeather weather={game.HourlyWeather} />
    </StyledGame>
  )
}

const StyledGame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px){
    width: 95%;
    margin: auto;
  } 
  h1 {
    width: 100%;
    text-align: center;
  }
  h5 {
    font-size: 1.2em;
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