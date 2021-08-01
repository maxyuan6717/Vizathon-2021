import styled from "styled-components";

export const GraphContainer = styled.div`
  height: 600px;
  width: 1000px;
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
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BtnContainer = styled.div`
  position: absolute;
  top: ${({ pos }) => 30 + pos * 45}px;
  left: 100px;
`;
