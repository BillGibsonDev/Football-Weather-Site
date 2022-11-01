import { useEffect, useState } from "react";
import axios from "axios";

// components
import { Weather } from "./Weather";
import { Odds } from "./Odds";

// styles
import styled from "styled-components";

// router
import { Link } from 'react-router-dom';

export const Game = ({data}) => {

const [ weather, setWeather ] = useState([])  

  useEffect(() => {
    const handleData = () => {
      axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${data.StadiumDetails.GeoLat},${data.StadiumDetails.GeoLong}&days=10&aqi=no&alerts=yes`)
      .then(function(response){
        setWeather(response.data.forecast.forecastday.filter(weather => weather.date === data.Date.slice(0,10)));
        console.log(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleData()
  }, [data])

  console.log(weather)

  return (
    <StyledGame>
     {
      !data
      ? <></>
      : <>
        {
          <div className="game">
            <div className="game-wrapper">
              <h2>{data.AwayTeam}</h2>
              <span >@ <div className="line" style={{margin: '0', border: '1px solid #0000003d', width: '100px'}}></div></span>
              <h2>{data.HomeTeam}</h2>
            </div>
            <Odds
              scoreId={data.ScoreID}
            />
            {
              weather.length === 0
              ? <h1 style={{textAlign: "center"}}>No Forecast Yet</h1>
              :<>
                {
                  weather.map((weather, key ) => {
                    return (
                      <Weather
                        weather={weather}
                        gametime={data.DateTime.slice(11,13)}
                        data={data}
                        key={key}
                      />
                    )
                  })
                }
              </>
            }
          </div> 
        }
        <div className="bottom-line-wrapper">
          <div className="bottom-line">
            <h6>{data.Channel}</h6>
            <div className="dash">-</div>
            <h6>{data.DateTime.slice(11,13)}:{data.DateTime.slice(14,16)}</h6>
          </div>
          <a href="/">Sportsbook</a>
          <Link to={`/games/${data.scoreId}`}>More Info</Link>
        </div>
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
  .game {
    display: grid;
    grid-template-columns: 20% 40% 40%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .bottom-line-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .bottom-line {
      display: flex;
      justify-content: center;
      align-items: center;
      .dash {
        margin: 0 4px;
      }
    }
  }

`;