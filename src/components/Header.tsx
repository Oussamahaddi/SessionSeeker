import React from 'react'
import { Link } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'

function Header() {
  return (
    <>
      <ul>
          <li>
            <Link to={PathConstants.HOME} />Home
          </li>
          <li>
            <Link to={PathConstants.ABOUT} />About
          </li>
          <li>
            <Link to={PathConstants.CATEGORIES} />Categories
          </li>
          <li>
            <Link to={PathConstants.REGISTER} />Register
          </li>
        </ul>
    </>
  )
}

export default Header