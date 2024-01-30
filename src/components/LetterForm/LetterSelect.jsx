import React from 'react';
import { LetterLabel, SelectStyle } from './LetterFormStyles';

export default function LetterSelect({memberData}) {
  return (
    <>
      <LetterLabel htmlFor='artistSelect'>아티스트</LetterLabel>
      <SelectStyle id='artistSelect'>
        {
          memberData.map((item) => {
            return <option key={item.id} value={item.id}>{item.artist}</option>
          })
        }
      </SelectStyle>
    </>
  )
}
