// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

// functions
import { formatToEST } from '../../../components/formatToEst.js';

export const HourlyWeather = ({ weather }) => {

    if(!weather){
        return (
            <StyledWeather>
                <h3>Hourly</h3>
                <div className="weather-wrapper">
                    <h1 style={{
                        margin: '50px 0',
                        color: 'white', 
                        textAlign: 'center', 
                        width: '100%'
                    }}>No Hourly Forecast Yet</h1>
                </div>
            </StyledWeather>
        )
    }

    return (
        <StyledWeather>
            <h3>Hourly</h3>
            {
                weather.map((weather, key) => {
                    return (
                        <div className="weather-wrapper" key={key}>
                            <div className="left-container">
                                <div className="time-temp-container">
                                    <h5 className='time'>{formatToEST(weather.startTime)}</h5>
                                    <h4>{weather.temperature}<span>F</span></h4>
                                </div>
                                <h5>{weather.shortForecast}</h5>
                            </div>
                            <div className="wind-percip-container">
                                <h6><span className="wind">Wind</span>{weather.windDirection} {weather.windSpeed}</h6>
                                <h6><span className="percip">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
                            </div>
                        </div>
                    )
                })
            }
        </StyledWeather>
    )
}

const StyledWeather = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    box-shadow: -2px 2px 2px black;
    margin: 20px 0;
    h3 {
        color: ${palette.accentColor};
        font-size: ${palette.titleSize};
        font-weight: ${palette.titleWeight};
        font-family: "Bebas Neue", sans-serif;
        text-align: center;
        width: 100%;
        max-width: 600px;
        background: white;
        border-radius: 4px 4px 0 0;
    }
    .weather-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 600px;
        padding: 10px;
        border: 1px solid ${palette.fadedWhite};
        border-radius: 0 0 4px 4px;
        background-color: ${palette.backgroundColorTransparent};
        @media (max-width: 400px){
            flex-direction: column;
        } 
        .left-container {
            display: flex;
            flex-direction: column;
            width: 60%;
            @media (max-width: 400px){
                width: 100%;
            } 
            .time-temp-container {
                display: flex;
                align-items: baseline;
                margin-bottom: 10px;
                .time {
                    font-size: ${palette.smallTextSize};
                    font-weight: 400;
                    color: ${palette.labelColor};
                }
                h4 {
                    font-size: 1.5em;
                    color: ${palette.titleColor};
                    margin: 0 10px;
                    font-weight: 400;
                }
            }
            h5 {
                color: ${palette.titleColor};
                font-size: 1em;
                font-weight: 400;
            }
        }
        .wind-percip-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 200px;
            margin: 0 0 0 auto;
            @media (max-width: 400px){
                margin: 10px 0 0 0;
                justify-content: baseline;
                align-items: baseline;
                max-width: none;
            } 
            h6 {
                font-size: .8em;
                display: flex;
                justify-content: space-between;
                width: 80%;
                max-width: 150px;
                font-weight: 600;
                color: ${palette.titleColor};
                .wind, .percip {
                    margin-right: auto;
                }
                .wind {
                    margin-bottom: 6px;
                }
                span {
                    font-weight: 200;
                }
            }
        }
    }
`;