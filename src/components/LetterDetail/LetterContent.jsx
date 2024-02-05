import React, { useRef, useState } from "react";
import { ArtistInfo, ButtonBox, LetterContentItem, LetterDate, LetterTopArea, UserName, UserThumb } from "./LetterDetailStyles";
import { LetterTextarea } from "components/LetterForm/LetterFormStyles";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateLetter } from "../../redux/modules/letter";

export default function LetterContent({ data }) {
  const { data: LetterData, localKey: LOCAL_KEY } = useSelector((state) => state.letter);
  const memberData = useSelector((state) => state.member.memberData);
  const dispatch = useDispatch();

  //전역으로 관리하지 않아도 되는 데이터 모음
  const [content, setContent] = useState(data.content);
  const contentRef = useRef(null);
  const [changeButtonVisible, setChangeButtonVisible] = useState("true");
  const [editButtonVisible, setEditButtonVisible] = useState("false");
  const [deleteButtonVisible, setDeleteButtonVisible] = useState("true");
  const [cancelButtonVisible, setCancelButtonVisible] = useState("false");

  const navigate = useNavigate();

  //수정할 member id 찾기
  const findMember = () => {
    const findData = memberData.find((item) => item.artist === data.writedTo);
    return findData.id;
  };

  //수정 영역 활성화 기능
  const editTextarea = () => {
    contentRef.current.focus();
    contentRef.current.readOnly = false;
    toggleVisible();
  };

  //수정 취소 시 - 수정 영역 비활성화 기능
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

    //수정할 데이터 id 조회
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
    dispatch(updateLetter({ ...LetterData }));
    setContent(content);
    alert("수정이 완료되었습니다.");

    //textarea 비활성화
    contentRef.current.readOnly = true;
    toggleVisible();
  };

  //삭제 기능
  const deleteLetter = () => {
    // 삭제할 데이터 id 조회
    const memberId = findMember();
    let deleteIdx = null;
    //삭제할 데이터의 index 구하기
    LetterData[memberId].forEach((el, idx) => {
      if (el["id"] === data.id) {
        deleteIdx = idx;
      }
    });
    if (window.confirm("정말 삭제하겠습니까?")) {
      LetterData[memberId].splice(deleteIdx, 1);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(LetterData));

      //TODO: localStorage로 삭제하고 메인으로 이동해서 이 화면에서는 렌더링이 되지 않아도 되는데...
      //이 기능은 과연 필요할까
      dispatch(updateLetter({ ...LetterData }));

      alert("삭제가 완료되었습니다. 메인 화면으로 이동합니다.");
      navigate("/");
    } else {
      alert("삭제를 취소하였습니다.");
    }
  };

  //textarea 에 입력한 값 useState로 관리
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
      <ArtistInfo>To {data.writedTo}</ArtistInfo>
      <LetterTextarea cols="30" rows="5" value={content} onChange={changeHandler} maxLength="80" ref={contentRef} readOnly placeholder="최대 80자까지 입력할 수 있습니다."></LetterTextarea>
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
