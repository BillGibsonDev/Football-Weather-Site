import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js'

// functions
import { formatToEST } from "../../../components/formatToEst.js";

export const GameDetails = ({game}) => {

    const [ day, setDay ] = useState('');

    useEffect(() => {
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        let d = new Date(game.Day)
        setDay(weekday[d.getDay()])
    }, [game])

  return (
    <StyledDetails>
        <div className="teams-container">
            <h2>{game.AwayTeam}</h2>
            <span>@</span>
            <h2>{game.HomeTeam}</h2>
        </div>
        <h6 className="date-channel">{day} {formatToEST(game.DateTime)} on {game.Channel}</h6>
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
    .teams-container {
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
    }
    .date-channel {
        margin: 6px auto 0 auto;
        font-size: ${palette.subtitleSize};
        font-weight: 400;
        color: white;
        width: 100%;
        height: 100%;
        text-align: center;
         padding-bottom: 12px;
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
                font-weight: 400;
                color: rgb(217, 217, 217);
                margin: 2px 0 0 0;
            }
        }
    }
`;