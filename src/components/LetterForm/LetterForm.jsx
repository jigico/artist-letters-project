import React from 'react'
import { FormContainer, LetterInput, LetterLabel, LetterTextarea } from './LetterFormStyles'
import Button from 'components/Button/Button'
import LetterSelect from './LetterSelect'
import { memberData } from 'shared/memberData'

export default function LetterForm() {
  return (
    <FormContainer>      
      <LetterSelect id="artistSelect" memberData={memberData}></LetterSelect>
      <LetterLabel htmlFor="name">닉네임</LetterLabel>
      <LetterInput type="text" id="name" />
      <LetterLabel htmlFor="contents">내용</LetterLabel>
      <LetterTextarea name="contents" id="contents" cols="30" rows="10"></LetterTextarea>
      <Button>등록</Button>
    </FormContainer>
  )
}
