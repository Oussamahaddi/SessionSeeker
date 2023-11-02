import React from 'react'
import { NavLink } from 'react-router-dom'
import PathConstants from '../../routes/pathConstants'
import styled from 'styled-components'

export default function Header() {
  
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi >
          <NavLink className={({isActive}) => (isActive ? "text-[#009696] underline" : "text-red-500")} to={PathConstants.HOME}>Home</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink className={({isActive}) => (isActive ? "text-[#009696] underline" : "text-red-500")} to={PathConstants.ABOUT} >About</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink className={({isActive}) => (isActive ? "text-[#009696] underline" : "text-red-500")} to={PathConstants.CATEGORIES} >Categories</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink className={({isActive}) => (isActive ? "text-[#009696] underline" : "text-red-500")} to={PathConstants.REGISTER} >Register</NavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

const StyledLi = styled.li`
  &:hover {
    color: #009696;
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