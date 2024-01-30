import styled from "styled-components";

export const MemberListContainer = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
export const MemberThumbnail = styled.div`
  margin: 10px 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
export const MemberThumbButton = styled.button`
  padding: 0;
  background: transparent;
  color: transparent;
  border: none;
  > img {
    display: block;
    transition: all 0.3s;
    filter: grayscale(1);
  }
  &:hover,
  &:focus {
    img {
      filter: unset;
    }
  }
`;
export const MemberItem = styled.li`
  text-align: center;
`;
