import axios from "axios";
import { useEffect, useState } from "react";
import { Weather } from "./Weather";
import { Odds } from "./Odds";

export const Game = ({data}) => {

const [ weather, setWeather ] = useState([])  
const [ gameWeather, setGameWeather ] = useState({})

  useEffect(() => {
    const handleData = () => {
      axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${data.StadiumDetails.GeoLat},${data.StadiumDetails.GeoLong}&days=10&aqi=no&alerts=yes`)
      .then(function(response){
        setWeather(response.data.forecast.forecastday.filter(weather => weather.date === data.Date.slice(0,10)));
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleData()
  }, [data])

  return (
    <>
     {
      !data
      ? <></>
      : <>
        {
          <div className="game" style={{margin: '50px 0', border: '2px solid #000000', padding: '6px'} }>
            <div className="game-wrapper">
              <h2>{data.AwayTeam}</h2>
              <span style={{ display: 'flex', alignItems: 'center', width: '100%'}}>@ <div className="line" style={{margin: '0', border: '1px solid #0000003d', width: '100px'}}></div></span>
              <h2>{data.HomeTeam}</h2>
            </div>
            <Odds
              scoreId={data.ScoreID}
            />
            {
              weather.map((weather, key ) => {
                return (
                  <Weather
                    weather={weather}
                    gametime={data.DateTime.slice(11,13)}
                    key={key}
                  />
                )
              })
            }
          </div> 
        }
      </>
     }
    </>
  );
}

