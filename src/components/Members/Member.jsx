import React from "react";
import { MemberItem, MemberThumbButton, MemberThumbnail } from "./MemberStyles";

export default function Member({ data, onClickHandler, isActive }) {
  return (
    <MemberItem onClick={onClickHandler}>
      <MemberThumbnail>
        <MemberThumbButton type="button" isActive={isActive}>
          <img src={data.thumbnail} alt={`${data.artist} 썸네일`} />
        </MemberThumbButton>
      </MemberThumbnail>
      <strong>{data.artist}</strong>
    </MemberItem>
  );
}
