import styled from "styled-components";

export const Row = styled.div<{ top?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.top ? "0 0 12px 0" : "12px 0")};
  font-size: 15px;
  color: #333;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
