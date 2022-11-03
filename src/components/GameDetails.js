import { useState, useEffect } from "react";

// styles
import styled from "styled-components";

export const GameDetails = ({data}) => {

    const [ day, setDay ] = useState('')

    useEffect(() => {
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        let d = new Date(data.Day)
        setDay(weekday[d.getDay()])
    }, [data])

  return (
    <StyledDetails>
        <div className="teams-container">
            <h2>{data.AwayTeam}</h2>
            <span>@</span>
            <h2>{data.HomeTeam}</h2>
        </div>
        <div className="channel-container">
          <h6>{data.Channel}</h6>
          <div className="dash">-</div>
          { 
            Number(data.DateTime.slice(11,13)) > 12 
            ? <h6>{day} {Number(data.DateTime.slice(11,13) - 12)}:{data.DateTime.slice(14,16)}pm EST</h6>
            : <h6>{day} {Number(data.DateTime.slice(11,13))}:{data.DateTime.slice(14,16)}am EST</h6>
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
    margin-bottom: 6px;
    .teams-container {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 2em;
        }
        span {
            margin: 0 10px;
            font-size: 16px;
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
        }
        .dash {
            background: black;
            height: 2px;
            width: 8px;
            margin: 6px;
        }
    }
`;