import React from "react";
import LetterItem from "./LetterItem";
import { LetterContainer } from "./LetterStyles";
import EmptyItem from "./EmptyItem";

export default function LetterList({ data, memberId }) {
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
