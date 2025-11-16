import styled from "styled-components";

export const Box = styled.div`
  width: 340px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
`;

export const Divider = styled.div`
  width: 340px;
  height: 0.7px;
  background: #eee;
  margin: 6px 0;
`;

export const DoneButton = styled.button`
  width: 100%;
  background: #fecd0f;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20;
  padding-right: 20;
  margin-top: 12px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
