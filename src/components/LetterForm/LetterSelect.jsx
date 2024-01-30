import React from 'react';
import { LetterLabel, SelectStyle } from './LetterFormStyles';

export default function LetterSelect({memberData, onChangeHandler}) {
  return (
    <>
      <LetterLabel htmlFor='artistSelect'>아티스트</LetterLabel>
      <SelectStyle id='artistSelect' onChange={onChangeHandler}>
        <option value="">아티스트를 선택해주세요.</option>
        {
          memberData.map((item) => {
            return <option key={item.id} value={item.artist}>{item.artist}</option>
          })
        }
      </SelectStyle>
    </>
  )
}
