import React from 'react'
import { FormContainer, LetterInput, LetterLabel, LetterTextarea } from './LetterFormStyles'

export default function LetterForm() {
  return (
    <FormContainer>
      <LetterLabel htmlFor="name">닉네임</LetterLabel>
      <LetterInput type="text" id="name" />
      <LetterLabel htmlFor="contents">내용</LetterLabel>
      <LetterTextarea name="contents" id="contents" cols="30" rows="10"></LetterTextarea>
      <button>등록</button>
    </FormContainer>
  )
}
