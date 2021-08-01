import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

import * as Styles from "./App.styles";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles.AppContainer>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Styles.AppContainer>
    </ThemeProvider>
  );
}

export default App;
