import React, {useEffect, useState} from 'react'
import { StyledH1 } from '../components/styledComponent'
import styled from 'styled-components'
import Categorie from '../components/Categorie'
import Session from '../components/Session'
import { CategoryT } from '../types/categorie'
import { getCategories } from '../api'


export default function Categories () {

  const [data, setData] = useState<CategoryT[]>([]);

  const getData = async () => {
    setData(getCategories());
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <>
      <StyledH1>Session Categories</StyledH1>
      <StyledCategories>
        {
          data.map((ele, i) => (
            <Categorie key={i} category={ele} />
          ))
        }
      </StyledCategories>
      <StyledH1 color='gray'>3D Printing and design</StyledH1>
      <StyledSessions>
        <Session />
        <Session />
        <Session />
        <Session />
      </StyledSessions>
    </>
  )
}

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`

const StyledSessions = styled.div`
  margin: 2rem 0;
  display : flex;
  flex-wrap: wrap;
  gap: 20px;
`