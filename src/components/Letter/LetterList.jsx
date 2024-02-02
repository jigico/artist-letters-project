import React, { useContext } from "react";
import LetterItem from "./LetterItem";
import { LetterContainer } from "./LetterStyles";
import EmptyItem from "./EmptyItem";
import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";

export default function LetterList() {
  const { data } = useContext(LetterContext);
  const { memberId } = useContext(MemberContext);

  const letterData = data[memberId];
  if (letterData && letterData.length) {
    return (
      <LetterContainer>
        {letterData.map((item) => {
          return <LetterItem key={item.id} data={item} />;
        })}
      </LetterContainer>
    );
  } else {
    return <EmptyItem />;
  }
}
