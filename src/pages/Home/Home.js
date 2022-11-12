import { useEffect, useState } from "react";
import axios from "axios";

// styles
import styled from "styled-components";

// components
import { Game } from './components/Game';

export const Home = () => {

const [ data, setData ] = useState([])

  useEffect(() => {
    const handleData = () => {
      axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2022/10?key=${process.env.REACT_APP_SPORTS_KEY}`)
      .then(function(response){
        setData(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleData()
  }, [])

  return (
    <StyledHome>
      <div className="games-wrapper">
        {
          !data
          ? <></>
          : <>
            {
              data.filter(data => data.AwayTeam !== 'BYE').filter(data => data.Status === "Scheduled" || data.Status === 'InProgress').map((data, key) => {
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
        </div>
        {/* <h1 style={{width: '80%', margin: '0 auto'}}>Completed Games</h1>
        <div className="games-wrapper">
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
        </div> */}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .games-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    margin: auto;
    @media screen and (max-width:1110px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
`;
