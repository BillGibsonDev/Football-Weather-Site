import axios from "axios";
import { useEffect, useState } from "react";

import { Game } from './components/Game';


function App() {

const [ data, setData ] = useState([])

  useEffect(() => {
    const handleData = () => {
      axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=${process.env.REACT_APP_WEATHER_KEY}`)
      .then(function(response){
          setData(response.data);
        })
        .catch(function(error){
          console.log(error)
        })
    }
    handleData()
  }, [])

  console.log(data.filter(data => data.Week === 8 ).filter(data => data.AwayTeam !== 'BYE'))

  return (
    <div className="App">
     {
      !data
      ? <></>
      : <>
      <h1>Week 8</h1>
        {
          data.filter(data => data.Week === 8 ).filter(data => data.AwayTeam !== 'BYE').map((data, key) => {
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
  );
}

export default App;
