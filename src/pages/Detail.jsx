import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../shared/fakeData.json'

export default function Detail() {
  const params = useParams();
  const findData = data.find((item) => item.id === params.id)

  return (
    <>
      {findData.content}
    </>
  )
}
