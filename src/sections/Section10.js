import React from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";

import { BsChevronUp } from "react-icons/bs";

import src from "../assets/stop.png";

import * as Styles from "./Section10.styles";

const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

const Section10 = () => {
  return (
    <Background color="pink" style={{ position: "relative" }}>
      <Content section={10}>
        <Styles.DualityContainer>
          <Styles.DualityText>
            <b>
              Thus is the duality of social media: an agent of transmission for
              love and for hate, a tool that can be leveraged by anyone for
              great good and great harm.
            </b>
            <Spacer height={25} />
            <Styles.SmallText>
              But by no means are online forces for good and harm balanced. If
              anything, the persistent, exponential rise of anti-Asian hate
              online throughout 2020-21 demonstrates how, left unregulated, the
              harm overwhelms the good.
              <Spacer height={10} />
              Only when online hate spills into the physical world in alarming
              ways is it met with a comparable wave of counter-hate. And as we
              have seen in the rise of #StopAsianHate, support and solidarity
              and education can conquer hate and lead to the real-world
              effects—be it millions of dollars in fundraising, new legislation
              and history curriculums, grassroots movements, a greater
              understanding of the AAPI experience—that transform society in
              ways both big and small.
              <Spacer height={10} />
              But is this just another wave that will rise, crash, recede as we
              once again disappear into apathy and social media doomscrolling?
              Or is this a first indication of a turning tide? The answer is up
              to all of us—tech companies, government regulators, ordinary
              users. Time will tell.
            </Styles.SmallText>
          </Styles.DualityText>
          <Styles.ImageContainer>
            <Styles.Image src={src} />
          </Styles.ImageContainer>
        </Styles.DualityContainer>
      </Content>
      <Styles.UpBtn
        onClick={() =>
          scroll.scrollToTop({
            duration: 4000,
          })
        }
      >
        <BsChevronUp size={30} style={{ display: "block" }} />
      </Styles.UpBtn>
      <Styles.Footer>Built by Max & Julia • vizathon 2021</Styles.Footer>
    </Background>
  );
};

export default Section10;
