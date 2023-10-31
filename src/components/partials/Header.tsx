import React from 'react'
import { Link } from 'react-router-dom'
import PathConstants from '../../routes/pathConstants'
import styled from 'styled-components'

export default function Header() {

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link to={PathConstants.HOME}>Home</Link>
        </StyledLi>
        <StyledLi>
          <Link to={PathConstants.ABOUT} >About</Link>
        </StyledLi>
        <StyledLi>
          <Link to={PathConstants.CATEGORIES} >Categories</Link>
        </StyledLi>
        <StyledLi>
          <Link to={PathConstants.REGISTER} >Register</Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

const StyledLi = styled.li`
  color: red;
  &:hover {
    color: aqua
  };
  
`

const StyledUl = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

const StyledNav = styled.nav`
  padding: 15px 0;
`