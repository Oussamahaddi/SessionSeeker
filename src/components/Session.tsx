import React from 'react'
import styled from "styled-components";
import { SessionsT } from '../types/categorie';

type PropsType = {
  session : SessionsT
}

const Session : React.FC<PropsType> = ({session}) => {

  return (
    <>
      <StyledSession>
        <StyledH3>{session.name}</StyledH3>
        <StyledP>{session.speaker.name} | {session.speaker.org}</StyledP>
      </StyledSession>
    </>
  )
}

export default Session;

const StyledSession = styled.div`
  padding: .5rem 1rem;
  &:hover {
    border-color : #009696;
    color: #009696;
  }
`

const StyledH3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
`
const StyledP = styled.p`
  font-size: 14px;
`