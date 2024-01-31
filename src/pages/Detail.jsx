import LetterContent from "components/LetterDetail/LetterContent";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const LOCAL_KEY = "letter"; //localStorage key
  const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [data, setData] = useState(initial !== null ? initial : []); //TODO : 이전 데이터 체크를 useEffect 를 사용해야 하는건지 확인 필요

  const params = useParams();
  let findData = {};

  //id랑 일치하는 데이터 찾기
  for (const value of Object.values(data)) {
    for (let i = 0; i < value.length; i++) {
      console.log(value[i]);
      if (value[i].id === params.id) {
        findData = value[i];
        break;
      }
    }
  }

  return <LetterContent data={findData} setData={setData} />;
}
