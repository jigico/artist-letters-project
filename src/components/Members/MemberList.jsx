import React from "react";
import { memberData } from "shared/memberData";
import Member from "./Member";
import { MemberListContainer } from "./MemberStyles";

export default function MemberList({ setMemberId }) {
  const viewList = (id) => {
    setMemberId(id);
  };
  return (
    <MemberListContainer>
      {memberData.map((item) => {
        let id = item.id;
        return <Member key={item.id} data={item} onClickHandler={() => viewList(id)} />;
      })}
    </MemberListContainer>
  );
}
