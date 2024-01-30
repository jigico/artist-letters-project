import React from 'react'
import { StyledButton } from './ButtonStyles'

export default function Button({children}) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
