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
import { Loader } from "../../components/Loader.js";
import { HelmetComponent } from "../../components/HelmetComponent.js";
import { UnknownPath } from '../404Page';

// redux
import { connect, useDispatch } from 'react-redux';
import { getGames } from "../../redux/actions/games.js";

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

  if(game){
    return (
      <StyledGame>
        <HelmetComponent game={game.GameData} />
        <GameDetails game={game} />
        <GameDayWeather weather={game.GameDayWeather} />
        <HourlyWeather weather={game.HourlyWeather} />
      </StyledGame>
    )
  }

  return (
    <UnknownPath game={true}/>
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
    font-size: ${palette.subtitleSize};
  }
`;

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
  };
};

export default connect(mapStateToProps)(Game);