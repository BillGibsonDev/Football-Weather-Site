// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const Weather = ({weather, game}) => {

    return (
        <StyledWeather>
            <div className="weather-wrapper">
                {
                    game.Stadium.State === '' || game.Stadium.State === null
                    ? <h5 className="city">{game.Stadium.City}, {game.Stadium.Country}</h5>
                    : <h5 className="city">{game.Stadium.City}, {game.Stadium.State}, {game.Stadium.Country}</h5>
                }
                <div className="top-condition-container">
                    <img src={weather.Icon} alt={weather.Condition} />
                    <div className="icon-text-container">
                        <h4>{weather.Condition}</h4>
                        <h5>{Math.floor(weather.Temp)}<span>F</span></h5>
                    </div>
                </div>
                <div className="bottom-condition-container">
                    <h6><span className="title">Wind</span>{Math.floor(weather.Wind)}<span className="unit">mph</span></h6>
                    <h6><span className="title">Gusts</span>{Math.floor(weather.Gusts)}<span className="unit">mph</span></h6>
                    <h6><span className="title">Rain</span>{Math.floor(weather.Rain)}<span className="unit">%</span></h6>
                </div>
            </div>
            
        </StyledWeather>
    )
}

const StyledWeather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .weather-wrapper {
        h5 {
            font-size: 1.2em;
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
                width: 75px;
                height: 75px;
            }
            .icon-text-container {
                h4 {
                    font-size: 1.5em;
                    color: ${palette.titleColor};
                    max-width: 250px;
                }
                h5 {
                    font-size: 1.2em;
                    font-weight: 400;
                    color: ${palette.titleColor};
                }
            }
        }
        .bottom-condition-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            h6 {
                font-size: 1em;
                display: flex;
                justify-content: space-between;
                width: 150px;
                font-weight: 400;
                color: ${palette.labelColor};
                span {
                    
                }
                .title {
                    margin-right: auto;
                }
            }
        }
    }
`;