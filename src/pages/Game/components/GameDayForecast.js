// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const GameDayWeather = ({ weather }) => {

    if(!weather){
        return (
            <h1 style={{
                margin: '10px 0',
                color: 'white', 
                textAlign: 'center', 
                width: '100%'
            }}>No Forecast Yet</h1>
        )
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
                <h4>Forecast</h4>
                <p>{weather.detailedForecast}</p>
            </div>
        </StyledWeather>
    )
}

const StyledWeather = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    border: 1px solid ${palette.fadedWhite};
    padding: 10px;
    @media (max-width: 750px){
        flex-direction: column;
    } 
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
                font-size: 1.2em;
                color: white;
                font-weight: ${palette.titleWeight};
            }
            h5 {
                font-size: 1em;
                color: ${palette.titleColor};
                font-weight: ${palette.titleWeight};
            }
            h6 {
                color: ${palette.titleColor};
                font-size: .9em;
                font-weight: 400;
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
        margin-bottom: auto;
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
            font-size: .9em;
            color: ${palette.labelColor};
            width: 100%;
        }
    }
`;