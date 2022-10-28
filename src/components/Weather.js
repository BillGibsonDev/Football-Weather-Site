import React from 'react'

export const Weather = ({weather, gametime}) => {
  
    console.log(weather)

    return (
    <div>
        {
            weather.hour.filter(weather => weather.time.slice(11,13) === gametime).map((game, key) => {
                return (
                    <h1>{game.gust_mph}</h1>
                )
            })
        }

    </div>
  )
}
