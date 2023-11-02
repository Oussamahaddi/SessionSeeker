import React, { useState } from 'react'
import { StyledH1, StyledP } from '../components/styledComponent'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

export default function Register () {

  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    navigate(PathConstants.THANKS, {state : email});
  }

  return (
    <>
      <StyledH1>
        Register for Wizzard Tech 
      </StyledH1>
      <StyledP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis vero culpa, 
        assumenda magnam incidunt quia architecto distinctio dignissimos delectus alias reprehenderit 
        explicabo quod ipsam qui odit nam temporibus quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis vero culpa, 
        assumenda magnam incidunt quia architecto distinctio
      </StyledP>
      <StyledDiv>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="">Email :</label>
          <StyledInp type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <StyledButton>Submit</StyledButton>
        </StyledForm>
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  margin: 3rem 0;
`  
const StyledForm = styled.form`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const StyledInp = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const StyledButton = styled.button`
  background-color : #009696;
  padding: 10px 0;
  margin-top: 1rem;
  border-radius: 5px;
  color: white;
`