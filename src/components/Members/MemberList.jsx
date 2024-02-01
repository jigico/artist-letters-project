import React, { useContext } from "react";
import { memberData } from "shared/memberData";
import Member from "./Member";
import { MemberListContainer } from "./MemberStyles";
import { LetterContext } from "context/LetterContext";

export default function MemberList() {
  const { memberId, setMemberId } = useContext(LetterContext);

  const viewList = (id) => {
    setMemberId(id);
  };

  return (
    <MemberListContainer>
      {memberData.map((item) => {
        const id = item.id;
        return <Member key={item.id} data={item} onClickHandler={() => viewList(id)} isActive={memberId === id ? "true" : "false"} />;
      })}
    </MemberListContainer>
  );
}
