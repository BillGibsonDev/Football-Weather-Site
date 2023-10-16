import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js'
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
    border-bottom: 2px solid ${palette.accentColor};
    margin-bottom: 6px;
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
        margin-bottom: 6px;
        h2 {
            font-size: 2em;
            color: ${palette.accentColor};
        }
        span {
            color: ${palette.accentColor};
            margin: 0 10px;
            font-size: 1em;
        }
    }
    .date-channel {
        margin: 0 auto 8px auto;
        font-size: 1em;
        font-weight: 400;
        color: ${palette.labelColor};
        width: 100%;
        text-align: center;
    }
    .stadium-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-bottom: 6px;
        h6 {
            font-size: 1.2em;
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .stadium-name{
            font-weight: 700;
            color: ${palette.titleColor};
        }
        .stadium-details-container {
            h6 {
                font-size: 1em;
                font-weight: 400;
                color: ${palette.labelColor};
                margin: 6px 0 0 0;
            }
        }
    }
`;