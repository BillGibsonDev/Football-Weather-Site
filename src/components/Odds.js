import { useEffect, useState } from 'react'

import axios from 'axios'

export const Odds = ({scoreId}) => {
  
    const [ odds, setOdds ] = useState({})
 
useEffect(() => {
    const handleOdds = () => {
        axios.get(`https://api.sportsdata.io/v3/nfl/odds/json/GameOddsLineMovement/${scoreId}?key=${process.env.REACT_APP_SPORTS_KEY}`)
        .then((response) => {
            console.log(response.data[0].PregameOdds[0])
        })
        .catch((err) => [
            console.log(err)
        ])
    }
  handleOdds();
}, [])


    return (
    <div>

    </div>
  )
}