import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";
import { useState } from "react";
import Router from "shared/Router";
import { memberData } from "shared/memberData";

function App() {
  const LOCAL_KEY = "letter"; //localStorage key
  const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [data, setData] = useState(initial !== null ? initial : {});
  const [memberId, setMemberId] = useState(1);

  return (
    <LetterContext.Provider value={{ data, setData, LOCAL_KEY }}>
      <MemberContext.Provider value={{ memberId, setMemberId, memberData }}>
        <Router />
      </MemberContext.Provider>
    </LetterContext.Provider>
  );
}

export default App;
