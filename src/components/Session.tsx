import React from 'react'
import styled from "styled-components"

const Session = () => {
  return (
    <>
      <StyledSession>
        <StyledH3>3D Printing and Design</StyledH3>
        <StyledP>Augmented Reality Estate</StyledP>
      </StyledSession>
    </>
  )
}

export default Session;

const StyledSession = styled.div`
  padding: .5rem 1rem;
  border : 1px solid black;
`

const StyledH3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
`
const StyledP = styled.p`
  font-size: 14px;
`