import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js'

// functions
import { formatToEST } from "../../../components/formatToEst.js";

export const GameDetails = ({game}) => {

    const [ dayDate, setDayDate ] = useState('')

    useEffect(() => {
        const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const gameDate = new Date(game.Day);
        const today = new Date();
        if(today.getDate() !== gameDate.getDate()){
            setDayDate(`${months[gameDate.getMonth()]} ${gameDate.getDate()}`);
        } else {
            setDayDate('');
        }
    }, [game])

  return (
    <StyledDetails>
        <div className="date-container">
            {
                dayDate ? 
                <h2 className="date-text">{dayDate}, {formatToEST(game.DateTime)}</h2>
                : <h2 className="date-text">{formatToEST(game.DateTime)}</h2>
            }
        </div>
        <div className="teams-container">
            <h2>{game.AwayTeam}</h2>
            <span>@</span>
            <h2>{game.HomeTeam}</h2>
        </div>
        {
            game.Channel === 'ABC' ?
            <h3 className="channel-text">{game.Channel} / ESPN</h3>
            :<h3 className="channel-text">{game.Channel}</h3>
        }
        <div className="stadium-container">
            {
                !game.StadiumDetails.State
                ? <h5 className="city">{game.StadiumDetails.City}, {game.StadiumDetails.Country}</h5>
                : <h5 className="city">{game.StadiumDetails.City}, {game.StadiumDetails.State}</h5>
            }
            <h6 className="stadium-name">{game.StadiumDetails.Name}</h6>
            <div className="stadium-details-container">
                {
                    game.StadiumDetails.Type === "RetractableDome"
                    ? <h6>Retractable Dome</h6>
                    : <h6>{game.StadiumDetails.Type}</h6>
                }
                <h6>{game.StadiumDetails.PlayingSurface}</h6>
            </div>
        </div>
    </StyledDetails>
  )
}

const StyledDetails = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 2px solid ${palette.subtleAccentColor};
    margin-bottom: 6px;
    .date-container, .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        margin-bottom: 6px;
        h2 {
            font-size: 2em;
            color: ${palette.accentColor};
            font-weight: 400;
            font-family: "Bebas Neue", sans-serif;
        }
        span {
            color: ${palette.accentColor};
            margin: 0 10px;
            font-size: 1em;
        }
        .date-text {
            font-size: 1.5em;
        }
    }
    .teams-container {
        background: none;
        margin-bottom: none;
        margin: 6px 0 0 0;
        line-height: .8;

        h2 {
            font-size: 2.5em;
            text-shadow: 3px 1px 0 black;
        }
        h2, span {
            color: white;
        }
    }
    .channel-text {
        margin: 0 0 10px 0;
        color: ${palette.accentColor};
        font-weight: 700;
    }
    .stadium-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: 6px 0;
        .city {
            text-align: center;
            font-size: 1.5em;
            font-weight: 400;
            letter-spacing: 2px;
            font-family: "Bebas Neue", sans-serif;
        }
        h6 {
            font-size: .9em;
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .stadium-name {
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .stadium-details-container {
            h6 {
                font-size: .8em;
                font-weight: 200;
                margin: 2px 0 0 0;
            }
        }
    }
`;