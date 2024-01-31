import styled from "styled-components";

export const ButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
`;
export const StyledButton = styled.button`
  display: ${(props) => (props.display ? "block" : "none")};
  height: 25px;
  color: #fff;
  background-color: #0066ff;
  border-radius: 5px;
  border: none;
  font-family: inherit;
`;
