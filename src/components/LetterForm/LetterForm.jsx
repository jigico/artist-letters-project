import React, { useRef, useState } from "react";
import { FormContainer, LetterInput, LetterLabel, LetterTextarea } from "./LetterFormStyles";
import LetterSelect from "./LetterSelect";
import { memberData } from "shared/memberData";
import { v4 as uuidv4 } from "uuid";
import { ButtonBox, StyledButton } from "components/Button/ButtonStyles";

export default function LetterForm({ data, setData, localKey }) {
  const [selected, setSelected] = useState("");
  const nameRef = useRef("");
  const contentsRef = useRef("");

  //폼 이벤트
  const formHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contents = e.target.contents.value;

    //유효성 검사
    if (!selected.trim()) {
      alert("아티스트를 선택해주세요");
      //TODO: useRef 로 포커스 이동
      return;
    }
    if (!name.trim()) {
      alert("닉네임을 입력해주세요");
      nameRef.current.focus();
      return;
    }
    if (!contents.trim()) {
      alert("컨텐츠를 입력해주세요");
      contentsRef.current.focus();
      return;
    }

    //등록 기능
    saveLetter(name, contents);

    alert("등록이 완료되었습니다.");
    e.target.reset();
  };

  //아티스트 셀렉트박스 이벤트
  const onChangeHandler = (e) => {
    setSelected(e.target.value);
  };

  //등록 기능
  const saveLetter = (name, contents) => {
    const id = uuidv4();
    const date = new Date();
    const newDataArr = data;

    const newDataObj = {
      createdAt: date.toLocaleString(),
      nickname: name,
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      content: contents,
      writedTo: selected,
      id
    };

    newDataArr.push(newDataObj);
    localStorage.setItem(localKey, JSON.stringify(newDataArr));
    //TODO 내림차순
    setData([...newDataArr]);
  };

  return (
    <FormContainer onSubmit={formHandler}>
      <LetterSelect id="artistSelect" onChangeHandler={(e) => onChangeHandler(e)} memberData={memberData}></LetterSelect>
      <LetterLabel htmlFor="name">닉네임</LetterLabel>
      <LetterInput type="text" id="name" name="name" ref={nameRef} maxLength="10" />
      <LetterLabel htmlFor="contents">내용</LetterLabel>
      <LetterTextarea name="contents" id="contents" cols="30" rows="10" maxLength="70" ref={contentsRef}></LetterTextarea>
      <ButtonBox>
        <StyledButton display={true}>등록</StyledButton>
      </ButtonBox>
    </FormContainer>
  );
}
