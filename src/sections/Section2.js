import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText, Source } from "../global_styles/Typography";

import HoverText from "../components/HoverText";

// import * as Styles from "./Section2.styles";

const Section2 = () => {
  return (
    <>
      <Background color="pink">
        <Content section={2}>
          <CenteredText width={800} weight={700}>
            The COVID-19 pandemic has seen viral spread of not just the
            coronavirus, but also{" "}
            <HoverText
              primary="coronaracism"
              secondary={{
                text: (
                  <span>
                    Coronaracism describes the racial hatred directed toward
                    certain groups of people fueled by the COVID-19 pandemic. It
                    refers to the indiscriminate way that all people of East
                    Asian appearance are being targeted right now.
                  </span>
                ),
                width: 120,
                src: "Media Diversity Institute",
                href: "https://www.media-diversity.org/anti-asian-hate-and-coronaracism-grows-rapidly-on-social-media-and-beyond/",
              }}
            />
            .
          </CenteredText>
          <Spacer height={50} />
          <CenteredText width={800} weight={300}>
            From March 2020 to 2021, over 6.6K hate incidents incidents were
            reported to Stop AAPI Hate.
          </CenteredText>
          <Spacer height={15} />
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
        </Content>
      </Background>
    </>
  );
};

export default Section2;
