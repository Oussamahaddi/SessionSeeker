import React from 'react'
import { Link } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'

function Header() {
  return (
    <nav>
      <ul>
          <li>
            <Link to={PathConstants.HOME}>Home</Link>
          </li>
          <li>
            <Link to={PathConstants.ABOUT} >About</Link>
          </li>
          <li>
            <Link to={PathConstants.CATEGORIES} >Categories</Link>
          </li>
          <li>
            <Link to={PathConstants.REGISTER} >Register</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Header