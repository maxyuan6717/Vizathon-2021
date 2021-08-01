import styled from "styled-components";
import { theme } from "../themes";

export const WIDTH = 1152;

export const Centered = `display: flex;justify-content: center;align-items: center;`;

export const Background = styled.div`
  display: flex;
  background-color: ${({ theme, color }) => theme.colors[color]};
  min-width: ${WIDTH}px;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: ${WIDTH}px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${({ theme, section }) =>
    `${theme[`section${section}`].padding[0]}px ${
      theme[`section${section}`].padding[1]
    }px ${theme[`section${section}`].padding[2]}px ${
      theme[`section${section}`].padding[3]
    }px`};
  ${Centered};
  flex-direction: column;
`;

export const Spacer = styled.div`
  ${({ height }) => `height: ${height}px;`};
  width: 100%;
`;

export const Tint = (color, opacity = 0.33) => `
&:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors[color]};
  opacity: ${opacity};
}
`;

export const Btn = styled.div`
  font-size: 16px;
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? "#c94284" : "")};
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c9327b;
  }
`;
