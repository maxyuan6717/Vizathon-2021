import styled from "styled-components";
import { Tint } from "../global_styles/Structure";

export const Landing = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;

  ${Tint("pink", 0.5)}
`;

export const SocialMediaText = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 40px;s
  top: -28px;
  left: 20px;
  font-weight: 400;
`;

export const AgentText = styled.div`
  position: absolute;
  font-weight: 900;
  font-size: 80px;
  line-height: 80px;
  bottom: -40px;
  left: 20px;
  width: 610px;
`;

export const SmallText = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  width: 513px;
  right: -85px;
  bottom: 50px;
`;
