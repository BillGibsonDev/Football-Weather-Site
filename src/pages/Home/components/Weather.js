// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const Weather = ({weather}) => {

    return (
        <StyledWeather>
            <div className="weather-wrapper">
                <div className="top-condition-container">
                    <img src={weather.icon} alt="" />
                    <div className="icon-text-container">
                        <h5>{weather.temperature}<span>&deg;</span></h5>
                        <h4>{weather.shortForecast}</h4>
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
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 0 20px auto 0;
            }
            .icon-text-container {
                max-width: 250px;
                width: 70%;
                h4 {
                    font-size: ${palette.labelSize};
                    color: ${palette.labelColor};
                    display: flex;
                    font-weight: 400;
                    width: 100%;
                }
                h5 {
                    margin-bottom: 6px;
                    font-size: ${palette.subtitleSize};
                    font-weight: 600;
                    color: ${palette.labelColor};
                }
            }
        }
        .bottom-condition-container {
            margin: 10px auto;
            width: 90%;
            h6 {
                margin: 2px 0;
                font-size: ${palette.smallTextSize};
                display: flex;
                justify-content: space-between;
                min-width: 150px;
                font-weight: 400;
                color: ${palette.labelColor};
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