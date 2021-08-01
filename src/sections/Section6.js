import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText } from "../global_styles/Typography";

import src from "../assets/candle.gif";

import * as Styles from "./Section6.styles";

const Section6 = () => {
  return (
    <>
      <Background color="black">
        <Content section={6}>
          <CenteredText width={800} weight={300}>
            This environment of hate came to a boiling point on March 16th,
            2021, when six Asian women were among the victims of a horrific
            shooting in Atlanta Georgia, targeted based on gender, race, and
            place of work.
          </CenteredText>
          <Spacer height={100} />
          <img src={src} alt="Candle" height={150} />
        </Content>
      </Background>
      <Styles.Border />
    </>
  );
};

export default Section6;
