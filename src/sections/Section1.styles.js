import styled from "styled-components";
// import { Tint } from "../global_styles/Structure";

export const Landing = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffa800;
    opacity: 0.25;
    transform: rotate(-4deg);
    z-index: 2;
  }
`;

export const SocialMediaText = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 40px;
  top: -32px;
  left: 20px;
  font-weight: 400;
  z-index: 3;
`;

export const AgentText = styled.div`
  position: absolute;
  font-weight: 900;
  font-size: 80px;
  line-height: 80px;
  bottom: -40px;
  left: 20px;
  width: 610px;
  z-index: 3;
`;

export const SmallText = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  width: 480px;
  right: -85px;
  bottom: 50px;
  z-index: 3;
`;
