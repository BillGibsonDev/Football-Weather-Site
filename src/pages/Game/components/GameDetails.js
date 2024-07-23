import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js';

// functions
import { formatToEST } from "../../../components/formatToEst.js";

export const GameDetails = ({game}) => {

    const [ day, setDay ] = useState('')

    useEffect(() => {
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        let d = new Date(game.GameData.Day)
        setDay(weekday[d.getDay()])
    }, [game])

  return (
    <StyledDetails>
        <div className="teams-container">
            <h2>{game.GameData.AwayTeam}</h2>
            <span>@</span>
            <h2>{game.GameData.HomeTeam}</h2>
        </div>
        <h6 className="date-channel">{day} {formatToEST(game.GameData.DateTime)} on {game.GameData.Channel}</h6>
        {
            !game.GameData.StadiumDetails.State
            ? <h5 className="city">{game.GameData.StadiumDetails.City}, {game.GameData.StadiumDetails.Country}</h5>
            : <h5 className="city">{game.GameData.StadiumDetails.City}, {game.GameData.StadiumDetails.State}</h5>
        }
        <div className="stadium-container">
            <h6 className="stadium-name">{game.GameData.StadiumDetails.Name}</h6>
            {
                game.GameData.StadiumDetails.Type === "RetractableDome"
                ? <h6>Retractable Dome</h6>
                : <h6>{game.GameData.StadiumDetails.Type}</h6>
            }
            <h6>{game.GameData.StadiumDetails.PlayingSurface}</h6>
        </div>
    </StyledDetails>
  )
}

const StyledDetails = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border: 1px solid ${palette.fadedWhite};
    box-shadow: -2px 2px 2px black;
    margin: 10px 0 0 0;
    border-radius: 4px;
    background-color: ${palette.backgroundColorTransparent};
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 2px 2px 0 0;
        margin-bottom: 10px;
        h2 {
            font-size: ${palette.titleSize};
            color: ${palette.accentColor};
            font-weight: ${palette.titleWeight};
            font-family: "Bebas Neue", sans-serif;
        }
        span {
            color: ${palette.accentColor};
            margin: 0 10px;
            font-size: 1em;
        }
    }
    .date-channel {
        margin: 0 auto 8px auto;
        font-size: 1.2em;
        font-weight: 400;
        color: white;
        width: 100%;
        text-align: center;
    }
    .city {
        text-align: center;
        margin: 20px auto 0 auto;
        font-size: ${palette.titleSize};
        font-family: "Bebas Neue", sans-serif;
    }
    .stadium-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: 0 0 20px 0;
        h6 {
            font-size: ${palette.labelSize};
            font-weight: 400;
            color: ${palette.labelColor};
        }
        .stadium-name {
            font-size: ${palette.subtitleSize};
            font-weight: 400;
            color: ${palette.titleColor};
        }
    }
`;