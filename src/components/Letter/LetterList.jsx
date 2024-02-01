import React, { useContext } from "react";
import LetterItem from "./LetterItem";
import { LetterContainer } from "./LetterStyles";
import EmptyItem from "./EmptyItem";
import { LetterContext } from "context/LetterContext";

export default function LetterList() {
  const { data, memberId } = useContext(LetterContext);
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
