import React, { useContext } from "react";
import Member from "./Member";
import { MemberListContainer } from "./MemberStyles";
import { MemberContext } from "context/MemberContext";

export default function MemberList() {
  const { memberId, setMemberId } = useContext(MemberContext);
  const { memberData } = useContext(MemberContext);

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
