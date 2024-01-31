import React from "react";
import { memberData } from "shared/memberData";
import Member from "./Member";
import { MemberListContainer } from "./MemberStyles";

export default function MemberList({ memberId, setMemberId }) {
  const viewList = (id) => {
    setMemberId(id);
  };

  return (
    <MemberListContainer>
      {memberData.map((item) => {
        const id = item.id;
        return <Member key={item.id} data={item} memberId={memberId} onClickHandler={() => viewList(id)} isActive={memberId === id ? "true" : "false"} />;
      })}
    </MemberListContainer>
  );
}
