import React from "react";
import { Content, Spacer } from "../global_styles/Structure";
import { CenteredText } from "../global_styles/Typography";

// import src from "../assets/lady.png";
import src from "../assets/protest.jpeg";

import * as Styles from "./Section8.styles";

const Section8 = () => {
  return (
    <Styles.Container src={src}>
      <Content section={8} style={{ zIndex: 69 }}>
        <CenteredText width={850} weight={700}>
          Soon after, social media became an agent of transmission for something
          else: the #StopAsianHate movement.
        </CenteredText>
        <Spacer height={50} />
        <CenteredText width={850} weight={400}>
          People took to their keyboards and screens to organize candlelight
          vigils and movements and educational resources, to share fundraiser
          links and news articles and personal testimony of the AAPI experience.
        </CenteredText>
      </Content>
    </Styles.Container>
  );
};

export default Section8;
