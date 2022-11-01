import { useState } from 'react';

// styles
import styled from 'styled-components'

export const Weather = ({weather, gametime, data}) => {

    const [ gameWeather ] = useState(weather.hour.filter(weather => weather.time.slice(11,13) === gametime))

    return (
        <StyledWeather>
            {
                gameWeather.map((weather, key) => {
                    return (
                        <div className="weather-wrapper" key={key}>
                            <div className="top-condition-container">
                                <img src={weather.condition.icon} alt={weather.condition.text} />
                                <div className="icon-text-container">
                                    {
                                        data.StadiumDetails.State === ''
                                        ? <h5>{data.StadiumDetails.City}, {data.StadiumDetails.Country}</h5>
                                        : <h5>{data.StadiumDetails.City}, {data.StadiumDetails.State}, {data.StadiumDetails.Country}</h5>
                                    }
                                    <h4>{weather.condition.text}</h4>
                                    <h5>{Math.floor(weather.temp_f)}<span>F</span></h5>
                                </div>
                            </div>
                            <div className="bottom-condition-container">
                                <h6><span className="title">Wind</span>{Math.floor(weather.wind_mph)}<span className="unit">mph</span></h6>
                                <h6><span className="title">Gusts</span>{Math.floor(weather.gust_mph)}<span className="unit">mph</span></h6>
                                <h6><span className="title">Rain</span>{Math.floor(weather.chance_of_rain)}<span className="unit">%</span></h6>
                            </div>
                        </div>
                    )
                })
            }
        </StyledWeather>
    )
}

const StyledWeather = styled.div`
    display: flex;
    flex-direction: column;
    .weather-wrapper {
        
        .top-condition-container {
            display: flex;
            img {
                width: 75px;
                height: 75px;
            }
            .icon-text-container {
                h4 {
                    font-size: 1.8em;
                }
                h5 {
                    font-size: 1.5em;
                    font-weight: 400;
                }

            }
        }
        .bottom-condition-container {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            h6 {
                font-size: 1em;
                display: flex;
                justify-content: space-between;
                width: 150px;
                font-weight: 400;
                span {
                    
                }
                .title {
                    margin-right: auto;
                }
            }
        }
    }
`;