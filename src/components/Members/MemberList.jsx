import React from 'react'
import { memberData } from 'shared/memberData'
import Member from './Member'
import { MemberListContainer } from './MemberStyles'

export default function MemberList() {
  return (
    <MemberListContainer>
      {
        memberData.map((item) => {
          return <Member key={item.id} data={item} />
        })
      }
    </MemberListContainer>
  )
}
