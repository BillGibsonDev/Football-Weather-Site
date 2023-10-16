// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const Weather = ({weather, game}) => {

    return (
        <StyledWeather>
            <div className="weather-wrapper">
                {
                    game.StadiumDetails.State === '' || game.StadiumDetails.State === null
                    ? <h5 className="city">{game.StadiumDetails.City}, {game.StadiumDetails.Country}</h5>
                    : <h5 className="city">{game.StadiumDetails.City}, {game.StadiumDetails.State}, {game.StadiumDetails.Country}</h5>
                }
                <div className="top-condition-container">
                    <img src={weather.icon} alt={weather.shortForecast} />
                    <div className="icon-text-container">
                        <h4>{weather.shortForecast}</h4>
                        <h5>{weather.temperature}<span>F</span></h5>
                    </div>
                </div>
                <div className="bottom-condition-container">
                    <h6><span className="title">Wind</span>{weather.windSpeed}</h6>
                    <h6><span className="title">Precipitation</span>{Math.floor(weather.probabilityOfPrecipitation.value)}<span className="unit">%</span></h6>
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
        h5 {
            font-size: 1em;
            font-weight: 400;
            color: ${palette.labelColor};
        }
        .city {
            text-align: center;
        }
        .top-condition-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            img {
                width: 25px;
                height: 25px;
                margin-right: 6px;
                border-radius: 50%;
            }
            .icon-text-container {
                margin: 6px 0;
                h4 {
                    font-size: 1em;
                    color: ${palette.titleColor};
                    max-width: 250px;
                    display: flex;
                    flex-wrap: wrap;
                }
                h5 {
                    font-size: 1em;
                    font-weight: 400;
                    color: ${palette.titleColor};
                }
            }
        }
        .bottom-condition-container {
            margin: auto;
            h6 {
                margin: 2px 0;
                font-size: .8em;
                display: flex;
                justify-content: space-between;
                min-width: 150px;
                font-weight: 400;
                color: ${palette.labelColor};
                .title {
                    margin-right: auto;
                }
            }
        }
    }
`;