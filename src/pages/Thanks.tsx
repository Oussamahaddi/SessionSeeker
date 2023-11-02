import React from 'react'
import { useLocation } from 'react-router-dom'
import { StyledH1, StyledP } from '../components/styledComponent';
import styled from 'styled-components';

export default function Thanks() {

  const {state} = useLocation();

  console.log(state);

  return (
    <>
      <StyledH1>
        Thank You !
      </StyledH1>
      <StyledP>
        You're now registered to Wizard Tech.
      </StyledP>
      <StyledP>
        we've sent more details to <StyledEmail>{state}</StyledEmail>
      </StyledP>
    </>
  )
}

const StyledEmail = styled.span`
  font-size: 17px;
  font-weight: 700;
`
