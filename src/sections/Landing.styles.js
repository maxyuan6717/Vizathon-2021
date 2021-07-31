import styled from "styled-components";
import { Centered } from "../global_styles/Structure";

export const Landing = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
`;

export const SocialMediaText = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 40px;
  top: -38px;
  left: 20px;
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
  line-height: 21px;
  width: 513px;
  right: -85px;
  bottom: 50px;
`;

export const Coronaracism = styled.div`
  margin-top: 175px;
  ${Centered}
`;

export const HateIncidents = styled.div`
  margin-top: 50px;
  ${Centered}
`;

export const Source = styled.div`
  margin-top: 25px;
  ${Centered}
`;
