// styles
import styled from 'styled-components';
import * as palette from '../../../ThemeVariables.js';

export const GameWeather = ({weather}) => {

    return (
        <StyledWeather>
            {
                !weather[0]
                ?<h1>No Weather Yet</h1>
                :<>
                    {
                        weather.map((weather, key) => {
                            return (
                                <div className="weather-wrapper" key={key}>
                                    { 
                                        Number(weather.Time.slice(11,13)) >= 12 
                                        ? <h2>{Number(weather.Time.slice(11,13) - 12)}:{weather.Time.slice(14,16)}pm</h2>
                                        : <h2>{Number(weather.Time.slice(11,16))}am</h2>
                                    }
                                    <div className="weather-container">
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
                                            {
                                                weather.Snow > 1
                                                ? <h6><span className="title">Snow</span>{Math.floor(weather.Snow)}<span className="unit">%</span></h6>
                                                : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }   
        </StyledWeather>
    )
}

const StyledWeather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .weather-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        width: 90%;
        max-width: 600px;
        padding: 40px;
        border: 2px solid ${palette.accentColor};
        @media (max-width: 750px){
            padding: 10px;
            width: 100%;
        } 
        h2 {
            font-size: 1.2em;
            font-weight: 400;
            color: #fff;
        }
        .weather-container {
            min-width: 300px;
            width: 350px;
            display: flex;
            flex-direction: column;
            @media (max-width: 750px){
                min-width: 200px;
                width: 200px;
            } 
            .top-condition-container {
                display: flex;
                justify-content: left;
                align-items: center;
                img {
                    width: 75px;
                    height: 75px;
                }
                .icon-text-container {
                    h4 {
                        font-size: 1.5em;
                        color: ${palette.titleColor};
                    }
                    h5 {
                        color: ${palette.titleColor};
                        font-size: 1.2em;
                        font-weight: 400;
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
                        color: ${palette.labelColor};
                    }
                }
            }
        }
    }
`;