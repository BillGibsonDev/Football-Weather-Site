import styled from "styled-components"

export const GameDetails = ({data}) => {

    console.log(data)

  return (
    <StyledDetails>
        <h2>{data.AwayTeam}</h2>
        <div className="line-wrapper">
            <span>@</span>
            <div className="line"></div>
        </div>
        <h2>{data.HomeTeam}</h2>
    </StyledDetails>
  )
}

const StyledDetails = styled.div`
    h2 {
        font-size: 2em;
    }
    .line-wrapper {
        display: flex;
        align-items: center;
        span {
            font-size: 16px;
        }
        .line {
            height: 1px;
            background: #000000;
            width: 90%;
        }
    }
`;