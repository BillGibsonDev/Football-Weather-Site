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

  const [ data, setData ] = useState([])

  useEffect(() => {
    const handleData = () => {
      axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2022/10?key=${process.env.REACT_APP_SPORTS_KEY}`)
      .then(function(response){
        setData(response.data); 
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleData()
  }, [scoreId])

  return (
    <StyledGame>
      <section className="game-wrapper">
        {
          data.filter(data => data.ScoreID === Number(scoreId)).map((data, key) => {
            return (
              <>
                <GameDetails
                  data={data}        
                />
                {
                  data.StadiumDetails.State === '' || data.StadiumDetails.State === null
                  ? <h5 className="city">{data.StadiumDetails.City}, {data.StadiumDetails.Country}</h5>
                  : <h5 className="city">{data.StadiumDetails.City}, {data.StadiumDetails.State}, {data.StadiumDetails.Country}</h5>
                }
                <GameWeather
                  gametime={data.DateTime.slice(11,16)}
                  data={data}
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