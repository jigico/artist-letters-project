import React, { useRef, useState } from "react";
import { ButtonBox, LetterContentItem, LetterDate, LetterTopArea, UserName, UserThumb } from "./LetterDetailStyles";
import { LetterTextarea } from "components/LetterForm/LetterFormStyles";
import { memberData } from "shared/memberData";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

export default function LetterContent({ data, setData }) {
  const [content, setContent] = useState(data.content);
  const contentRef = useRef(null);
  const [changeButtonVisible, setChangeButtonVisible] = useState("true");
  const [editButtonVisible, setEditButtonVisible] = useState("false");
  const [deleteButtonVisible, setDeleteButtonVisible] = useState("true");
  const [cancelButtonVisible, setCancelButtonVisible] = useState("false");

  const LOCAL_KEY = "letter";
  const LetterData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  const navigate = useNavigate();

  //member 찾기
  const findMember = () => {
    const findData = memberData.find((item) => item.artist === data.writedTo);
    return findData.id;
  };
  console.log(data);
  //수정 영역 활성화 기능
  const editTextarea = () => {
    contentRef.current.focus();
    contentRef.current.readOnly = false;
    toggleVisible();
  };

  //수정 영역 비활성화 기능
  const cancelEditTextarea = () => {
    contentRef.current.readOnly = true;
    setContent(data.content);
    toggleVisible();
  };

  //[공통] 버튼 display toggle 상태 변경
  const toggleVisible = () => {
    setChangeButtonVisible((prev) => (prev === "true" ? "false" : "true"));
    setEditButtonVisible((prev) => (prev === "true" ? "false" : "true"));
    setDeleteButtonVisible((prev) => (prev === "true" ? "false" : "true"));
    setCancelButtonVisible((prev) => (prev === "true" ? "false" : "true"));
  };

  //수정 기능
  const editLetter = () => {
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    }
    if (data.content === content) {
      alert("변경된 내용이 없습니다. 확인 후 다시 눌러주세요.");
      contentRef.current.focus();
      return;
    }

    //수정할 데이터 조회
    const memberId = findMember();
    let updateIdx = null;
    LetterData[memberId].forEach((el, idx) => {
      if (el["id"] === data.id) {
        updateIdx = idx;
      }
    });
    let newData = data;
    newData.content = content;

    LetterData[memberId][updateIdx].content = content;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(LetterData));
    setData((prev) => {
      return { ...prev, content: content };
    });
    setContent(content);
    alert("수정이 완료되었습니다.");

    //textarea 비활성화
    contentRef.current.readOnly = true;
    toggleVisible();
  };

  //삭제 기능
  const deleteLetter = () => {
    const memberId = findMember();
    let deleteIdx = null;
    LetterData[memberId].forEach((el, idx) => {
      if (el["id"] === data.id) {
        deleteIdx = idx;
      }
    });
    if (window.confirm("정말 삭제하겠습니까?")) {
      LetterData[memberId].splice(deleteIdx, 1);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(LetterData));
      alert("삭제가 완료되었습니다.");
      navigate("/");
    }
  };

  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <LetterContentItem>
      <LetterTopArea>
        <UserThumb>
          <img src={data.avatar} alt={`${data.nickname} 썸네일`} />
        </UserThumb>
        <div>
          <UserName>{data.nickname}</UserName>
          <LetterDate>{data.createdAt}</LetterDate>
        </div>
      </LetterTopArea>
      <LetterTextarea cols="30" rows="5" value={content} onChange={changeHandler} maxLength="80" ref={contentRef} readOnly></LetterTextarea>
      <ButtonBox>
        <Button clickHandler={editTextarea} display={changeButtonVisible} variant="success">
          수정
        </Button>
        <Button clickHandler={editLetter} display={editButtonVisible} variant="success">
          완료
        </Button>
        <Button clickHandler={deleteLetter} display={deleteButtonVisible} variant="danger">
          삭제
        </Button>
        <Button clickHandler={cancelEditTextarea} display={cancelButtonVisible} variant="normal">
          취소
        </Button>
      </ButtonBox>
    </LetterContentItem>
  );
}
