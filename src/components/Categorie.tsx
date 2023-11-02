import React from 'react'
import styled from "styled-components";
import { CategoryT } from '../types/categorie';

type PropsType = {
  category : CategoryT,
}

const Categorie : React.FC<PropsType> = ({category}) => {

  return (
    <StyleSingleCat>
      {category.name}
    </StyleSingleCat>
  )
}

export default Categorie;

const StyleSingleCat = styled.div`
  border-radius: 5px;
  font-size: 15px;
  padding: 0 5px;
  &:hover {
    background-color: #494949;
    color: white;
    border-radius: 5px;
  }
`