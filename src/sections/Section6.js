import React from "react";
import { Background, Content } from "../global_styles/Structure";
import { CenteredText } from "../global_styles/Typography";

import src from "../assets/candle.gif";

import * as Styles from "./Section6.styles";

const Section6 = () => {
  return (
    <>
      <Background gradient style={{ position: "relative" }}>
        <Content section={6}>
          <CenteredText width={800} weight={300}>
            This environment of hate came to a boiling point on March 16th,
            2021, when six Asian women were among the victims of a horrific
            shooting in Atlanta Georgia, targeted based on gender, race, and
            place of work.
          </CenteredText>
          <Styles.Candle src={src} alt="Candle" height={150} />
        </Content>
      </Background>
    </>
  );
};

export default Section6;
