import { useState, useEffect } from 'react';
import axios from 'axios';

// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const GameWeather = ({gametime, game}) => {

    const [ weather, setWeather ] = useState([])  
    const [ gameStart, setGameStart ] = useState(0);
    const [ gameEnd, setGameEnd ] = useState(1);

    useEffect(() => {
        const handleWeather = () => {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${game.Stadium.GeoLat},${game.Stadium.GeoLong}&days=10&aqi=no&alerts=yes`)
            .then(function(response){
                setWeather(response.game.forecast.forecastday.filter(weather => weather.date === game.Date.slice(0,10)));
            })
            .catch(function(error){
                console.log(error)
            })
        }
        handleWeather()
        if(gametime.slice(0,2) === '13'){
            setGameStart(13)
            setGameEnd(16)
        } else if (gametime.slice(0,2) === '16' ){
            setGameStart(16)
            setGameEnd(19)
        } else if (gametime.slice(0,2) === '20' ){
            setGameStart(20)
            setGameEnd(23)
        } else if (gametime.slice(0,2) === '9' ){
            setGameStart(10)
            setGameEnd(13)
        } else {
            setGameStart(13)
            setGameEnd(16)
        }
    }, [game, gametime])

    return (
        <StyledWeather>
            {
                !weather[0]
                ?<h1>No Weather Yet</h1>
                :<>
                    {
                        weather[0].hour.slice(gameStart, gameEnd).map((weather, key) => {
                            return (
                                <div className="weather-wrapper" key={key}>
                                    { 
                                        Number(weather.time.slice(11,13)) >= 12 
                                        ? <h2>{Number(weather.time.slice(11,13) - 12)}:{weather.time.slice(14,16)}pm</h2>
                                        : <h2>{Number(weather.time.slice(11,16))}am</h2>
                                    }
                                    <div className="weather-container">
                                        <div className="top-condition-container">
                                            <img src={weather.condition.icon} alt={weather.condition.text} />
                                            <div className="icon-text-container">
                                                <h4>{weather.condition.text}</h4>
                                                <h5>{Math.floor(weather.temp_f)}<span>F</span></h5>
                                            </div>
                                        </div>
                                        <div className="bottom-condition-container">
                                            <h6><span className="title">Wind</span>{Math.floor(weather.wind_mph)}<span className="unit">mph</span></h6>
                                            <h6><span className="title">Gusts</span>{Math.floor(weather.gust_mph)}<span className="unit">mph</span></h6>
                                            <h6><span className="title">Rain</span>{Math.floor(weather.chance_of_rain)}<span className="unit">%</span></h6>
                                            {
                                                weather.chance_of_snow > 1
                                                ? <h6><span className="title">Snow</span>{Math.floor(weather.chance_of_snow)}<span className="unit">%</span></h6>
                                                : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }   
        </StyledWeather>
    )
}

const StyledWeather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .weather-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        width: 90%;
        max-width: 600px;
        padding: 40px;
        background: ${palette.gameBackground};
        @media (max-width: 750px){
            padding: 10px;
            width: 100%;
        } 
        h5 {
            font-size: 1.2em;
            font-weight: 400;
        }
        .weather-container {
            min-width: 300px;
            width: 350px;
            display: flex;
            flex-direction: column;
            @media (max-width: 750px){
                min-width: 200px;
                width: 200px;
            } 
            .top-condition-container {
                display: flex;
                justify-content: left;
                align-items: center;
                img {
                    width: 75px;
                    height: 75px;
                }
                .icon-text-container {
                    h4 {
                        font-size: 1.5em;
                        color: ${palette.titleColor};
                    }
                    h5 {
                        color: ${palette.titleColor};
                        font-size: 1.2em;
                        font-weight: 400;
                    }
                }
            }
            .bottom-condition-container {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;
                h6 {
                    font-size: 1em;
                    display: flex;
                    justify-content: space-between;
                    width: 150px;
                    font-weight: 400;
                    color: ${palette.labelColor};
                    span {
                        
                    }
                    .title {
                        margin-right: auto;
                        color: ${palette.labelColor};
                    }
                }
            }
        }
    }
`;