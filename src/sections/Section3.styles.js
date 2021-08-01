import styled from "styled-components";

export const CumulativeToggle = styled.div`
  font-size: 16px;
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? "#c94284" : "")};
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;

  position: absolute;
  top: ${({ pos }) => 10 + pos * 45}px;
  left: 100px;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c9327b;
  }
`;

export const GraphContainer = styled.div`
  height: 600px;
  width: 900px;
  position: relative;
`;

export const LegendBall = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

export const Title = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`;
