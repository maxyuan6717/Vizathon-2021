import React from "react";
import { Source } from "../global_styles/Typography";

import * as Styles from "./HoverText.styles";

const HoverText = ({ primary, secondary }) => {
  return (
    <Styles.Container>
      {primary}
      <Styles.SecondaryText width={secondary.width}>
        {secondary.text}
        <Styles.SecondarySrc>
          <Source>
            Source:{" "}
            <a href={secondary.href} target="_blank" rel="noopener noreferrer">
              {secondary.src}
            </a>
          </Source>
        </Styles.SecondarySrc>
      </Styles.SecondaryText>
    </Styles.Container>
  );
};

export default HoverText;
