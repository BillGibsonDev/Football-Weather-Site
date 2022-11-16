import { useEffect, useState } from "react";
import axios from "axios";

// router
import { useParams } from "react-router-dom";

// styles
import styled from 'styled-components';
import * as palette from '../../ThemeVariables.js';

// components
import { GameWeather } from "./components/GameWeather";
import { GameDetails } from "./components/GameDetails";

export const Game = () => {

  const { scoreId } = useParams();

  const [ game, setgame ] = useState([])

  useEffect(() => {
    const handlegame = () => {
      axios.get(`https://api.sportsgame.io/v3/nfl/scores/json/ScoresByWeek/2022/10?key=${process.env.REACT_APP_SPORTS_KEY}`)
      .then(function(response){
        setgame(response.game); 
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handlegame()
  }, [scoreId])

  return (
    <StyledGame>
      <section className="game-wrapper">
        {
          game.filter(game => game.ScoreID === Number(scoreId)).map((game, key) => {
            return (
              <>
                <GameDetails
                  game={game}        
                />
                {
                  game.Stadium.State === '' || game.Stadium.State === null
                  ? <h5 className="city">{game.Stadium.City}, {game.Stadium.Country}</h5>
                  : <h5 className="city">{game.Stadium.City}, {game.Stadium.State}, {game.Stadium.Country}</h5>
                }
                <GameWeather
                  gametime={game.DateTime.slice(11,16)}
                  game={game}
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