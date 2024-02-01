import LetterList from "components/Letter/LetterList";
import LetterForm from "components/LetterForm/LetterForm";
import MemberList from "components/Members/MemberList";
import { LetterContext } from "context/LetterContext";
import React, { useState } from "react";

export default function Home() {
  const LOCAL_KEY = "letter"; //localStorage key
  const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [data, setData] = useState(initial !== null ? initial : {}); //TODO : 이전 데이터 체크를 useEffect 를 사용해야 하는건지 확인 필요
  const [memberId, setMemberId] = useState(1);
  console.log("리렌더링");
  return (
    <LetterContext.Provider value={{ data, setData, memberId, setMemberId }}>
      <LetterForm data={data} setData={setData} localKey={LOCAL_KEY} />
      <MemberList />
      <LetterList />
    </LetterContext.Provider>
  );
}
