// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const GameDayWeather = ({ weather }) => {

    if(!weather){
        <h1>No Weather Yet</h1>
    }

    return (
        <StyledWeather>
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
                <h5>Forecast</h5>
                <p>{weather.detailedForecast}</p>
            </div>
        </StyledWeather>
    )
}

const StyledWeather = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    .top-container {
        display: flex;
        align-items: center;
        justify-content: center;
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
                font-size: 1.4em;
                color: white;
            }
            h5 {
                font-size: 1em;
                color: ${palette.titleColor};
                font-weight: 400;
            }
            h6 {
                color: ${palette.titleColor};
                font-size: 1em;
                font-weight: 400;
                display: flex;
                justify-content: space-between;
                width: 150px;
            }
        }
    }
    .bottom-container {
        max-width: 600px;
        margin-top: 20px;
        h5 {
            color: white;
        }
        p {
            font-size: 1em;
            color: ${palette.labelColor};
            width: 100%;
        }
    }
`;