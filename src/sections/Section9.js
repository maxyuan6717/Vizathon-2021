import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";

import * as Styles from "./Section9.styles";

const Section9 = () => {
  return (
    <Background color="pink">
      <Content section={9}>
        <Styles.DataContainer>
          <Styles.Graph />
          <Styles.Description>
            The number of GoFundMe campaigns supporting Asian American
            communities increased by %% following the Atlanta shootings.
          </Styles.Description>
        </Styles.DataContainer>
        <Spacer height={100} />
        <Styles.DataContainer>
          <Styles.Graph />
          <Styles.Description>
            The proportion of #StopAsianHate fundraisers that achieve their
            goals is also substantially higher than the GoFundMe average, with
            some fundraisers exceeding their goals by astounding margins.
          </Styles.Description>
        </Styles.DataContainer>
      </Content>
    </Background>
  );
};

export default Section9;
