import React from 'react'
import styled from "styled-components"
import { SessionsT } from '../types/categorie'

type PropsType = {
  selectedSession : SessionsT
}

const Speaker : React.FC<PropsType> = ({selectedSession}) => {
  return (
    <>
      <StyledContainer>
        <StyledH3>{selectedSession.name}</StyledH3>
        <StyledDescription>
          {selectedSession.desc}
        </StyledDescription>
        <StyledMiniDiv>
          <StyledH4>{selectedSession.speaker.name}</StyledH4>
          <StyledDescription>{selectedSession.speaker.title} at {selectedSession.speaker.org}</StyledDescription>
        </StyledMiniDiv>
        <StyledDescription>
          {selectedSession.speaker.bio}
        </StyledDescription>
      </StyledContainer>
    </>
  )
}

export default Speaker;

const StyledContainer = styled.div`
  margin : 1rem 0;
`

const StyledH3 = styled.h3`
  font-size: 17px;
  font-weight: 600;
`

const StyledH4 = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #504f4f;
`

const StyledDescription = styled.p`
  font-size: 13px;
`

const StyledMiniDiv = styled.div`
  margin: 1rem 0;
`

