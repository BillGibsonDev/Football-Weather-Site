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
    border-bottom: 2px solid ${palette.subtleAccentColor};
    margin-bottom: 6px;
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${palette.lessFadedWhite};
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        margin-bottom: 6px;
        h2 {
            font-size: ${palette.titleSize};
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
        font-size: ${palette.subtitleSize};
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
            font-size: ${palette.subtitleSize};
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .stadium-name{
            font-weight: ${palette.titleWeight};;
            color: ${palette.titleColor};
        }
        .stadium-details-container {
            h6 {
                font-size: ${palette.labelSize};
                font-weight: ${palette.labelWeight};;
                color: ${palette.labelColor};
                margin: 6px 0 0 0;
            }
        }
    }
`;