import styled, { css } from "styled-components";

export const VARIANTS = {
  success: css`
    background-color: #0066ff;
  `,
  danger: css`
    background-color: #ff0000;
  `,
  normal: css`
    background-color: #999999;
  `
};

export const ButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
`;
export const StyledButton = styled.button`
  ${(props) => props.variant};

  padding: 5px 10px;
  display: ${(props) => (props.display === "true" ? "block" : "none")};

  /* background-color: var(--button-bg-color, #0066ff); */
  color: #fff;
  /* background-color: #0066ff; */
  border-radius: 5px;
  border: none;
  font-family: inherit;
  font-size: 16px;
`;
