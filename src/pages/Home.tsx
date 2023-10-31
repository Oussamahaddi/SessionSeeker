import React from 'react'
import { 
  StyledDiv, 
  StyledImg, 
  StyledH1, 
  StyledP, 
  StyledSpan 
} from '../components/styledComponent'

export default function Home() {
  return (
    <StyledDiv>
      <StyledImg src="/assets/bg.jpg" alt="" />
      <div>
        <StyledH1>Welcome to Wizard Tech</StyledH1>
        <StyledP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem,
          illo alias distinctio doloremque eius <StyledSpan>numquam dolorem, culpa, blanditiis</StyledSpan> incidunt
          aspernatur! Beatae eum vitae eveniet, quasi vel voluptate neque incidunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem,
          illo alias distinctio doloremque eius incidunt
          aspernatur! Beatae eum vitae eveniet, quasi vel voluptate neque incidunt.
        </StyledP>
      </div>
    </StyledDiv>
  )
}