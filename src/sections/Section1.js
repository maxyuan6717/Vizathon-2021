import React from "react";
import { Background, Content } from "../global_styles/Structure";

import src from "../assets/landing_image.png";

import * as Styles from "./Section1.styles";

const Section1 = () => {
  return (
    <Background color="pink">
      <Content section={1}>
        <Styles.Landing>
          <Styles.SocialMediaText>SOCIAL MEDIA:</Styles.SocialMediaText>
          <Styles.AgentText>AGENT OF TRANSMISSION</Styles.AgentText>
          <Styles.SmallText>
            A study in the role of social media in society, reflected through
            the rise of anti-Asian hate and #StopAsianHate.
          </Styles.SmallText>
          <img src={src} alt="Social Media" />
        </Styles.Landing>
      </Content>
    </Background>
  );
};

export default Section1;
