import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText, Source } from "../global_styles/Typography";

import src from "../assets/discrimination.png";

import * as Styles from "./Section2.styles";

const Section2 = () => {
  return (
    <Background color="pink">
      <Content section={2}>
        <CenteredText width={805} weight={300}>
          In this case, the agent of transmission is not droplet spread. It's
          existing forces of systemic oppression combined with feelings of fear,
          uncertainty, and vulnerability,{" "}
          <b>amplified & made more contagious by the Internet.</b>
        </CenteredText>
        <Spacer height={180} />
        <Styles.TroublingContainer>
          <Styles.TroublingText>
            <b>
              This is troubling because hate online sets the stage for
              real-world violence.
            </b>
            <Spacer height={20} />
            From March 2020 to 2021, the number of incidents of online
            discrimination reported to Stop AAPI Hate increased by 82%.
            Incidents of physical assault increased by 64%.
            <Spacer height={20} />
            <div>
              <Source>
                Source:{" "}
                <a
                  href="https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stop AAPI Hate National Report
                </a>
              </Source>
            </div>
          </Styles.TroublingText>
          <Styles.DiscriminationImage>
            <img src={src} alt="Discrimination" />
          </Styles.DiscriminationImage>
        </Styles.TroublingContainer>
      </Content>
    </Background>
  );
};

export default Section2;
