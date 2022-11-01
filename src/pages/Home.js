import { useEffect, useState } from "react";
import axios from "axios";

// styles
import styled from "styled-components";

// components
import { Game } from '../components/Game';

export const Home = () => {

const [ data, setData ] = useState([])

  useEffect(() => {
    const handleData = () => {
      axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2022/9?key=${process.env.REACT_APP_SPORTS_KEY}`)
      .then(function(response){
          setData(response.data);
        })
        .catch(function(error){
          console.log(error)
        })
    }
    handleData()
  }, [])

  console.log(data)

  return (
    <StyledHome>
      <h1>Week 8</h1>
      {
        !data
        ? <></>
        : <>
          {
            data.filter(data => data.Week === 9 ).filter(data => data.AwayTeam !== 'BYE').filter(data => data.Status === "Scheduled").map((data, key) => {
              return (
                <Game
                  data={data}
                  key={key}
                />
              )
            })
          }
        </>
      }
      <h1>Completed Games</h1>
      {
        !data
        ? <></>
        : <>
          {
            data.filter(data => data.Week === 8 ).filter(data => data.AwayTeam !== 'BYE').filter(data => data.Status !== "Scheduled").map((data, key) => {
              return (
                <Game
                  data={data}
                  key={key}
                />
              )
            })
          }
      </>
      }
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
