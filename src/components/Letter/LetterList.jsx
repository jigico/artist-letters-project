import React from "react";
import LetterItem from "./LetterItem";
import { LetterContainer } from "./LetterStyles";

export default function LetterList({ data }) {
  const memberId = 1;
  const letterData = data[1];
  console.log(data);
  return (
    <LetterContainer>
      ss
      {letterData.map((item) => {
        return <LetterItem key={item.id} data={item} />;
      })}
    </LetterContainer>
  );
}
