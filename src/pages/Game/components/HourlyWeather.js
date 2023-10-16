// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

// functions
import { formatToEST } from '../../../components/formatToEst.js';

export const HourlyWeather = ({ weather }) => {

    if(!weather){
        return (
            <h1 style={{
                margin: '10px 0',
                color: 'white', 
                textAlign: 'center', 
                width: '100%'
            }}>No Hourly Forecast Yet</h1>
        )
    }

    return (
        <StyledWeather>
            {
                weather.map((weather, key) => {
                    return (
                        <div className="weather-wrapper" key={key}>
                            <h2>{formatToEST(weather.startTime)}</h2>
                            <div className="weather-container">
                                <div className="top-condition-container">
                                    <h4>{weather.shortForecast}</h4>
                                    <h5>{weather.temperature}<span>F</span></h5>
                                </div>
                                <div className="bottom-condition-container">
                                    <h6><span className="title">Wind</span>{weather.windSpeed}</h6>
                                    <h6><span className="title">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
                                </div>
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
    .weather-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        width: 90%;
        max-width: 600px;
        padding: 10px;
        border: 2px solid ${palette.accentColor};
        @media (max-width: 750px){
            padding: 10px;
            width: 100%;
        } 
        h2 {
            font-size: 1em;
            font-weight: 400;
            color: #fff;
        }
        .weather-container {
            display: flex;
            justify-content: space-evenly;
            width: 80%;
            @media (max-width: 450px){
                width: 100%;
            } 
            .top-condition-container {
                display: flex;
                align-items: center;
                margin: 0 auto;
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                h4 {
                    font-size: 1.2em;
                    color: ${palette.titleColor};
                    margin: 0 10px;
                }
                h5 {
                    color: ${palette.titleColor};
                    font-size: 1em;
                    font-weight: 400;
                }
            }
            .bottom-condition-container {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: flex-end;
                width: 100%;
                max-width: 200px;
                margin-left: auto;
                h6 {
                    font-size: .9em;
                    display: flex;
                    justify-content: space-between;
                    width: auto;
                    width: 80%;
                    max-width: 150px;
                    font-weight: 400;
                    color: ${palette.labelColor};
                    .title {
                        margin-right: auto;
                        color: ${palette.labelColor};
                    }
                }
            }
        }
    }
`;