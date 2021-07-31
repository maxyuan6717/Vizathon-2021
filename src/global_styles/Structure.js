import styled from "styled-components";

const WIDTH = 1152;

export const Background = styled.div`
  display: flex;
  background-color: ${({ theme, color }) => theme.colors[color]};
  min-width: ${WIDTH}px;
`;

export const Content = styled.div`
  width: ${WIDTH}px;
  margin: 0 auto;
  padding: ${({ theme, page }) =>
    `${theme[page].padding[0]}px ${theme[page].padding[1]}px`};
`;
