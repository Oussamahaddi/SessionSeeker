import styled from "styled-components";


export const StyledDiv = styled.div`
  margin: 1rem 0%;
`

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
`
export const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  color : ${(props) => props.color};
`
export const StyledP = styled.p`
  font-size: 14px;
  margin: .5rem 0;
`

export const StyledSpan = styled.span`
  color: red;
  text-decoration: underline;
`