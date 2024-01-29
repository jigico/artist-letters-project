import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      home <br />
      <Link to='/detail'>detail로 이동</Link>
    </>
  )
}
