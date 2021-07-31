import styled from "styled-components";

const UNDERLINE_LENGTH = 200;

export const Container = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  position: relative;
  cursor: default;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.orange};
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    width: calc(100% + ${UNDERLINE_LENGTH}px);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const SecondaryText = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  text-align: right;
  font-size: 10px;
  position: absolute;
  width: ${({ width }) => width}px;
  right: calc(-${UNDERLINE_LENGTH}px);
  bottom: -10px;
  font-weight: 400;
  line-height: 12px;
  transform: translateY(100%);
  opacity: 0;
  transition: opacity 0.3s 0.3s ease-in-out;
`;
