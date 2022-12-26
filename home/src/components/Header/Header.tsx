import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyled } from './Header.styled'

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <span>Home App</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </HeaderStyled>
  )
}

export default Header
