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
            <h3>Game Day</h3>
            <div className="weather-wrapper">
                <div className="top-container">
                    <img src={weather.icon} alt={weather.shortForecast} />
                    <div className="icon-text-container">
                        <h4>{weather.shortForecast}</h4>
                        <h5>{weather.temperature}<span>F</span></h5>
                        <h6><span className="title">Wind</span>{weather.windSpeed}</h6>
                        <h6><span className="title">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
                    </div>
                </div>
                <div className="bottom-container">
                    <h4>Forecast</h4>
                    <p>{weather.detailedForecast}</p>
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
            width: 50%;
            @media (max-width: 750px){
                width: 100%;
            } 
            img {
                width: 75px;
                height: 75px;
                border-radius: 50%;
            }
            .icon-text-container {
                margin-left: 10px;
                .title {
                    margin-right: auto;
                }
                h4 {
                    font-size: ${palette.subtitleSize};
                    color: white;
                    font-weight: ${palette.titleWeight};
                }
                h5 {
                    font-size: ${palette.labelSize};
                    color: ${palette.titleColor};
                    font-weight: ${palette.titleWeight};
                }
                h6 {
                    color: ${palette.titleColor};
                    font-size: ${palette.smallTextSize};
                    font-weight: ${palette.labelWeight};
                    display: flex;
                    justify-content: space-between;
                    width: 150px;
                }
            }
        }
        .bottom-container {
            display: flex;
            flex-direction: column;
            width: 50%;
            max-width: 600px;
            @media (max-width: 750px){
                width: 100%;
                margin-top: 20px;
            } 
            h4 {
                font-size: 1.2em;
                color: white;
                font-weight: ${palette.titleWeight};
            }
            p {
                font-size: .8em;
                color: ${palette.labelColor};
                width: 100%;
            }
        }
    }
`;