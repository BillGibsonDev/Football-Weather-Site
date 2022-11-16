import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js';

export const GameDetails = ({game}) => {

    const [ day, setDay ] = useState('')

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
        <div className="channel-container">
          <h6>{game.Channel}</h6>
          <div className="dash">-</div>
          { 
            Number(game.DateTime.slice(11,13)) > 12 
            ? <h6>{day} {Number(game.DateTime.slice(11,13) - 12)}:{game.DateTime.slice(14,16)}pm EST</h6>
            : <h6>{day} {Number(game.DateTime.slice(11,13))}:{game.DateTime.slice(14,16)}am EST</h6>
          }
        </div>
        <div className="stadium-container">
            <h6 className="stadium-name">{game.Stadium.Name}</h6>
            {
                game.Stadium.Type === "RetractableDome"
                ? <h6>Retractable Dome</h6>
                : <h6>{game.Stadium.Type}</h6>
            }
        </div>
    </StyledDetails>
  )
}

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid black;
    margin: 20px 0;
    padding-bottom: 20px;
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 2em;
            color: ${palette.titleColor}
        }
        span {
            margin: 0 10px;
            font-size: 16px;
            color: ${palette.titleColor}
        }
    }
    .channel-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        h6 {
            font-size: 1.2em;
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .dash {
            background: black;
            height: 2px;
            width: 8px;
            margin: 6px;
        }
    }
    .stadium-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        h6 {
            font-size: 1.2em;
            font-weight: 400;
            color: ${palette.titleColor};
        }
        .stadium-name{
            font-weight: 700;
        }
    }
`;