// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const GameDayWeather = ({ weather }) => {

    if(!weather){
        return (
            <StyledWeather>
                <h3>Game Day</h3>
                <div className="weather-wrapper">
                    <h1 style={{
                        margin: '50px 0',
                        color: 'white', 
                        textAlign: 'center', 
                        width: '100%'
                    }}>No Game Day Forecast Yet</h1>
                </div>
            </StyledWeather>
        )
    }

    return (
        <StyledWeather>
            <h3>{weather.name}</h3>
            <div className="weather-wrapper">
                <div className="top-container">
                    <img src={weather.icon} alt={weather.shortForecast} />
                    <div className="icon-text-container">
                        <h5>{weather.temperature}<span>&deg;</span></h5>
                        <p>{weather.detailedForecast}</p>
                        <h6><span className="wind">Wind</span>{weather.windDirection} {weather.windSpeed}</h6>
                        <h6><span className="percip">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
                    </div>
                </div>
            </div>
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
    margin: 20px 0 0 0;
    @media (max-width: 750px){
        flex-direction: column;
    }
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
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        padding: 10px;
        border: 1px solid ${palette.fadedWhite};
        border-radius: 0 0 4px 4px;
        background-color: ${palette.backgroundColorTransparent};
        .top-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90%;
            @media (max-width: 750px){
                width: 100%;
            } 
            img {
                width: 75px;
                height: 75px;
                border-radius: 50%;
                margin: 10px 20px auto 0;
            }
            .icon-text-container {
                margin-left: 10px;
                h5 {
                    font-size: 2em;
                    color: ${palette.titleColor};
                    font-weight: ${palette.titleWeight};
                }
                p {
                    font-size: 1em;
                    color: white;
                    width: 100%;
                    margin: 10px 0 20px 0;
                }
                h6 {
                    color: ${palette.titleColor};
                    font-size: ${palette.smallTextSize};
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    width: 200px;
                }
                .wind, .percip {
                    margin-right: auto;
                }
                span {
                    font-weight: 200;
                }
            }
        }
    }
`;