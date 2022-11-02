// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom"

export const BottomLine = ({data}) => {
  return (
    <StyledLine>
        <div className="channel-container">
        <h6>{data.Channel}</h6>
        <div className="dash">-</div>
        { 
            Number(data.DateTime.slice(11,13)) > 12 
            ? <h6>{Number(data.DateTime.slice(11,13) - 12)}:{data.DateTime.slice(14,16)}pm EST</h6>
            : <h6>{Number(data.DateTime.slice(11,13))}:{data.DateTime.slice(14,16)}am EST</h6>
        }
        </div>
        <div className="stadium-container">
            
        </div>
        <Link to={`/games/${data.ScoreID}`}>More Info</Link>
    </StyledLine>
  )
}

const StyledLine = styled.div`

`;
