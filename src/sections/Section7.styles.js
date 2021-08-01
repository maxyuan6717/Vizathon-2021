import styled from "styled-components";

export const Text = styled.div`
  position: relative;
  z-index: 69;
`;

export const Quote = styled.div`
  position: absolute;
  font-family: "Romanesco", cursive;
  font-size: 400px;
  color: #ffa800;
  opacity: 0.5;
  ${({ left, right }) => (left ? "left: 0" : right ? "right: 0" : "")};
  top: 100px;
`;
