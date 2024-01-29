import Header from 'components/Header/Header'
import TopBanner from 'components/TopBanner/TopBanner'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <TopBanner />
      <main>
        {children}
      </main>
    </>
  )
}
