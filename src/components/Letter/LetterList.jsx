import React from 'react'
import LetterItem from './LetterItem';
import { LetterContainer } from './LetterStyles';

export default function LetterList({data}) {
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
