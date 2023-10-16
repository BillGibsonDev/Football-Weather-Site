import { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import * as palette from '../../../ThemeVariables.js'

export const GameDetails = ({game}) => {

    const [ day, setDay ] = useState('')

    useEffect(() => {
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        let d = new Date(game.Day)
        setDay(weekday[d.getDay()])
    }, [game])

    console.log(game)

  return (
    <StyledDetails>
        <div className="teams-container">
            <h2>{game.AwayTeam}</h2>
            <span>@</span>
            <h2>{game.HomeTeam}</h2>
        </div>
        <div className="channel-container">
          <h6>{game.Channel}</h6>
          <div className="dash"></div>
          { 
            Number(game.DateTime.slice(11,13)) > 12 
            ? <h6>{day} {Number(game.DateTime.slice(11,13) - 12)}:{game.DateTime.slice(14,16)}pm EST</h6>
            : <h6>{day} {Number(game.DateTime.slice(11,13))}:{game.DateTime.slice(14,16)}am EST</h6>
          }
        </div>
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

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 6px;
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 2em;
            color: ${palette.titleColor};
        }
        span {
            color: ${palette.titleColor};
            margin: 0 10px;
            font-size: 16px;
        }
    }
    .dash {
        background: ${palette.labelColor};
        height: 2px;
        width: 6px;
        margin: 6px;
    }
    .channel-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        h6 {
            font-size: 1em;
            font-weight: 400;
            color: ${palette.titleColor};
        }
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
                color: ${palette.titleColor};
                margin: 6px 0 0 0;
            }
        }
    }
`;