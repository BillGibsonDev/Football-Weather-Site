import { useEffect, useState } from "react";
import axios from "axios";

// components
import { Weather } from "./Weather";
//import { Odds } from "./Odds";
import { GameDetails } from "./GameDetails";

// styles
import styled from "styled-components";

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
  .game {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;