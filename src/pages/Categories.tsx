import React, {useEffect, useState} from 'react'
import { StyledH1 } from '../components/styledComponent'
import styled from 'styled-components'
import Categorie from '../components/Categorie'
import Session from '../components/Session'
import { CategoryT, SessionsT, SingleCategoryT } from '../types/categorie'
import { getCategories, getCategory, getSession } from '../api'
import { NavLink, useParams } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'
import Speaker from '../components/Speaker'


export default function Categories () {

  const [categories, setCategories] = useState<CategoryT[]>([]);
  const [selectedCategory, setSelectedCategoryt] = useState<SingleCategoryT>();
  const [selectedSession, setSelectedSession] = useState<SessionsT>();
  
  const {catId} = useParams<string>();
  const {sessionId} = useParams<string>();

  const getData = () => {
    setCategories(getCategories());
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setSelectedCategoryt(getCategory(catId));
  }, [catId])

  useEffect(() => {
    setSelectedSession(getSession(catId, sessionId));
  }, [catId, sessionId])

  return (
    <>
      <StyledH1>Session Categories</StyledH1>
      <StyledCategories>
        {
          categories.map((ele, i) => (
            <NavLink 
              className={({isActive}) => (isActive ? "bg-[#494949] text-white rounded" : "")} 
              key={i} 
              to={`${PathConstants.CATEGORIES}/${ele.id}`}
            >
              <Categorie category={ele} />
            </NavLink>
          ))
        }
      </StyledCategories>
      {
        catId &&
        <>
          <StyledH1 color='gray'>{catId}</StyledH1>
          <StyledSessions>
            {selectedCategory?.sessions.map((ele, i) => (
              <NavLink
                className={({isActive}) => (isActive ? "text-[#009696] border border-[#009696]" : "border border-black")}
                key={i} 
                to={`${PathConstants.CATEGORIES}/${catId}/${ele.id}`}
              >
                <Session session={ele}  />
              </NavLink>
            ))}
          </StyledSessions>
          {
            selectedSession ? <Speaker selectedSession={selectedSession} /> : <StyledH3>Select a Category from above</StyledH3>
          }
        </>
      }
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
const StyledH3 = styled.div`
  font-size: 18px;
  font-weight: 700;
`