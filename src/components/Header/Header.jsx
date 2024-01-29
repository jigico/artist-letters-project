import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './HeaderStyles'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='./'>ARTIST</Link>
    </HeaderContainer>
  )
}
