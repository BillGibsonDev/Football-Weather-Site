// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const Weather = ({weather, game}) => {

    return (
        <StyledWeather>
            <div className="weather-wrapper">
                <div className="top-condition-container">
                    <div className="icon-container">
                        <img src={weather.icon} alt={weather.shortForecast} />
                    </div>
                    <div className="icon-text-container">
                        <h4>{weather.shortForecast}</h4>
                        <h5>{weather.temperature}<span>F</span></h5>
                    </div>
                </div>
                <div className="bottom-condition-container">
                    <h6><span className="title">Wind</span>{weather.windSpeed}</h6>
                    <h6><span className="percip">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
                </div>
            </div>
        </StyledWeather>
    )
}

const StyledWeather = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .weather-wrapper {
        .top-condition-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            .icon-container {
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 100px;
                width: 30%;
                img {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                }
            }
            .icon-text-container {
                margin: 6px 0;
                max-width: 250px;
                width: 70%;
                h4 {
                    font-size: ${palette.labelSize};
                    color: ${palette.labelColor};
                    display: flex;
                    font-weight: ${palette.titleWeight};
                    width: 100%;
                    max-width: 250px;
                }
                h5 {
                    font-size: ${palette.labelSize};
                    font-weight: 200;
                    color: ${palette.labelColor};
                }
            }
        }
        .bottom-condition-container {
            margin: auto;
            h6 {
                margin: 2px 0;
                font-size: ${palette.smallTextSize};
                display: flex;
                justify-content: space-between;
                min-width: 150px;
                font-weight: ${palette.labelWeight};
                color: ${palette.labelColor};
                .wind, .percip {
                    margin-right: auto;
                }
            }
        }
    }
`;