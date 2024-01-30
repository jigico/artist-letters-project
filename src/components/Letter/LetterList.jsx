import React from 'react'
import LetterItem from './LetterItem';
import { LetterContainer } from './LetterStyles';

export default function LetterList({data}) {
  console.log('렌더링 됨');
  return (
    <LetterContainer>
      {
        data.map((item) => {
          return <LetterItem key={item.id} data={item} />
        })
      }
      
    </LetterContainer>
  )
}
