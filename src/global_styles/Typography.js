import styled from "styled-components";

export const CenteredText = styled.div`
  text-align: center;
  font-weight: ${({ weight }) => weight || 400};
  width: ${({ width }) => `${width}px`};
  font-size: ${({ size }) => size || 32}px;
  line-height: ${({ lineHeight }) => `${lineHeight}px` || "inherit"};
`;

export const LeftText = styled.div`
  font-weight: ${({ weight }) => weight || 400};
  width: ${({ width }) => `${width}px`};
  font-size: ${({ size }) => size || 32}px;
  line-height: ${({ lineHeight }) => `${lineHeight}px` || "inherit"};
`;

export const Source = styled.div`
  font-size: 8px;
  line-height: 9.4px;
`;
