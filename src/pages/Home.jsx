import LetterList from 'components/Letter/LetterList'
import LetterForm from 'components/LetterForm/LetterForm'
import MemberList from 'components/Members/MemberList'
import React, { useState } from 'react'


export default function Home() {
  const LOCAL_KEY = 'letter'; //localStorage key
  const initial = localStorage.getItem(LOCAL_KEY);
  const [data, setData] = useState(JSON.parse(initial));

  return (
    <>
      <LetterForm data={data} setData={setData} localKey={LOCAL_KEY} />
      <MemberList />
      <LetterList />
    </>
  )
}
