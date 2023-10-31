import React from 'react'
import { StyledSpan } from '../styledComponent'
import styled from "styled-components"

export default function Footer() {
  return (
    <StyledFooter>
      <div>&copy; 2022 |<StyledSpan>  wizard Tech</StyledSpan></div> 
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  border-top: 2px solid #ccc;
  padding: 1rem 0;
  margin : 2rem 0;
`
