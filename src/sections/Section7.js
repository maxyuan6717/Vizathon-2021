import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText } from "../global_styles/Typography";

import * as Styles from "./Section7.styles";

const Section7 = () => {
  return (
    <Background color="black">
      <Content section={7}>
        <CenteredText width={900} weight={300} style={{ position: "relative" }}>
          <Styles.Text>
            [When it comes to online hate], my biggest concern is the rise in
            physical violence against Asian people. It is unclear how much
            online hate results in physical violence,{" "}
            <b>
              but racist rhetoric online for sure helps set the climate for
              escalations.
            </b>
            <Spacer height={25} />
            The killings in Atlanta are a sad example of this escalation.
          </Styles.Text>
          <Styles.Quote left>{"\u201c"}</Styles.Quote>
          <Styles.Quote right>{"\u201d"}</Styles.Quote>
        </CenteredText>
        <Spacer height={50} />
        <CenteredText width={900} weight={200}>
          Gianluca Stringhini, Boston University
        </CenteredText>
      </Content>
    </Background>
  );
};

export default Section7;
