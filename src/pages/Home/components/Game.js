import { useEffect, useState } from "react";
import axios from "axios";

// components
import { Weather } from "./Weather";
//import { Odds } from "./Odds";
import { GameDetails } from "./GameDetails";

// router
import { Link } from 'react-router-dom';

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js';

export const Game = ({data}) => {

const [ weather, setWeather ] = useState([])  

// api call to get the weather from database 
// to throttle api calls
  useEffect(() => {
    const handleWeather = () => {
      axios.get(`http://localhost:5000/games`)
      .then(function(response){
        setWeather(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleWeather()
  }, [data])

  return (
    <StyledGame>
     {
      !data
      ? <></>
      : <>
        {
          <div className="game">
            <GameDetails
              data={data}
            />
            {/* <Odds
              scoreId={data.ScoreID}
            /> */}
            {
              weather.length === 0
              ? <h3>No Forecast Yet</h3>
              :<>
                {
                  weather.filter(weather => weather.ScoreID === data.ScoreID).map((weather, key) => {
                    return (
                      <Weather
                        weather={weather}
                        data={data}
                        key={key}
                      />
                    )
                  })
                }
              </>
              }
            <Link to={`/games/${data.ScoreID}`} className="game-link">More Info</Link>
          </div> 
        }
      </>
     }
    </StyledGame>
  );
}

const StyledGame = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
  margin: 20px 0;
  padding: 12px;
  width: 100%;
  background: ${palette.gameBackground};
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
    color: red;
  }
`;