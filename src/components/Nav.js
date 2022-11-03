// router
import { Link } from "react-router-dom"

// styles
import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
        <Link to="/">NFL Weather Bot</Link>
        <h2>Week 9</h2>
    </StyledNav>
  )
}

const StyledNav  = styled.nav`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    a {
        font-size: 2.5em;
        color: black;
    }
    h2 {
        font-size: 2em
    }
  
`;