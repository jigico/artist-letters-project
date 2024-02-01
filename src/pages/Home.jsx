import LetterList from "components/Letter/LetterList";
import LetterForm from "components/LetterForm/LetterForm";
import MemberList from "components/Members/MemberList";
import { LetterContext } from "context/LetterContext";
import React, { useState } from "react";

export default function Home() {
  const LOCAL_KEY = "letter"; //localStorage key
  const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [data, setData] = useState(initial !== null ? initial : {});
  const [memberId, setMemberId] = useState(1);

  return (
    <LetterContext.Provider value={{ data, setData, memberId, setMemberId, LOCAL_KEY }}>
      <LetterForm />
      <MemberList />
      <LetterList />
    </LetterContext.Provider>
  );
}
