import { useEffect, useState } from 'react'

import axios from 'axios'

import styled from 'styled-components'

export const Odds = ({scoreId}) => {
  
    const [ odds, setOdds ] = useState({})
 
    useEffect(() => {
        const handleOdds = () => {
            axios.get(`https://api.sportsdata.io/v3/nfl/odds/json/GameOddsLineMovement/${scoreId}?key=${process.env.REACT_APP_SPORTS_KEY}`)
            .then((response) => {
                setOdds(response.data[0].PregameOdds[0])
            })
            .catch((err) => [
                console.log(err)
            ])
        }
    handleOdds();
    }, [])


    return (
        <StyledOdds>
            <thead>
                <tr>
                    <th>Spread</th>
                    <th>Moneyline</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{odds.AwayPointSpread}<div className="odds-line"></div>{odds.HomePointSpreadPayout}</td>
                    <td>{odds.AwayMoneyLine}</td>
                    <td>O{odds.OverUnder}<div className="odds-line"></div>{odds.OverPayout}</td>
                </tr>
                <tr>
                    <td>{odds.HomePointSpread}<div className="odds-line"></div>{odds.HomePointSpreadPayout}</td>
                    <td>{odds.HomeMoneyLine}</td>
                    <td>U{odds.OverUnder}<div className="odds-line"></div>{odds.UnderPayout}</td>
                </tr>
            </tbody>
        </StyledOdds>
    )
}

const StyledOdds = styled.table`
text-align: center;
margin: 0 auto;

    thead {
        tr {
            th {

            }
        }
    }
    tbody {
        border: 1px black solid;
        tr {
            border: 1px black solid;
            td {
                min-width: 80px;
                border: 1px black solid;
                .odds-line {
                }
            }
        }
    }

`;