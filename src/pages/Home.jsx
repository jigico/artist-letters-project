import LetterList from "components/Letter/LetterList";
import LetterForm from "components/LetterForm/LetterForm";
import MemberList from "components/Members/MemberList";
import React, { useState } from "react";

export default function Home() {
  const LOCAL_KEY = "letter"; //localStorage key
  const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [data, setData] = useState(initial !== null ? initial : {}); //TODO : 이전 데이터 체크를 useEffect 를 사용해야 하는건지 확인 필요
  const [memberId, setMemberId] = useState(1);

  return (
    <>
      <LetterForm data={data} setData={setData} localKey={LOCAL_KEY} />
      <MemberList memberId={memberId} setMemberId={setMemberId} />
      <LetterList data={data} memberId={memberId} setMemberId={setMemberId} />
    </>
  );
}
