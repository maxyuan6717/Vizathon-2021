import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText } from "../global_styles/Typography";

import HoverText from "../components/HoverText";

import * as Styles from "./Section5.styles";

const Section5 = () => {
  return (
    <Background color="pink">
      <Content section={5}>
        <CenteredText width={805} weight={300}>
          Given our understanding of the harms of tech, none of this is
          surprising.
          <Spacer height={20} />
          And this trend is not isolated to anti-Asian hate. On the Internet at
          large, hate has become more pervasive over time.
        </CenteredText>
        <Spacer height={25} />
        <CenteredText width={805} weight={700}>
          Why? On social media, ideas are often spread, not on the basis of
          merit, but on the basis of emotional stimulation.
        </CenteredText>
        <Spacer height={150} />
        <Styles.DataContainer>
          <Styles.Percentage>17%</Styles.Percentage>
          <Styles.Details>
            For every word of{" "}
            <HoverText
              primary="moral outrage"
              secondary={{
                text: (
                  <span>
                    <b>Outrage</b> is “a strong moral emotion characterized by a
                    combination of surprise, disgust, and anger.”
                    <Spacer height={10} />
                    <b>Moral outrage</b> is “the emotion of outrage experienced
                    in reaction to an injustice, as such involving a moral
                    judgement, and is often accompanied by a desire to shame
                    and/or punish wrongdoers.”
                  </span>
                ),
                src: "Crockett Lab",
                href: "https://www.nature.com/articles/s41562-017-0213-3",
                width: 160,
                length: 350,
              }}
            />{" "}
            added to a tweet, the rate at which the tweet is retweeted increases
            by 17%.
          </Styles.Details>
        </Styles.DataContainer>
        <Styles.DataContainer>
          <Styles.Percentage>23%</Styles.Percentage>
          <Styles.Details>
            Nearly a quarter of 14-18 year olds (23%) report that they “often”
            encounter racist content online in 2020, up from 12% in 2018.
          </Styles.Details>
        </Styles.DataContainer>
      </Content>
    </Background>
  );
};

export default Section5;
