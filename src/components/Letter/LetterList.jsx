import React from 'react'
import dummy from 'shared/fakeData.json'
import LetterItem from './LetterItem';
import { LetterContainer } from './LetterStyles';

export default function LetterList() {  
  return (
    <LetterContainer>
      {
        dummy.map((item) => {
          return <LetterItem key={item.id} data={item} />
        })
      }
      
    </LetterContainer>
  )
}
