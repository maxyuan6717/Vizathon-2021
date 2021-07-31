import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

import * as Styles from "./App.styles";

import Landing from "./sections/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles.AppContainer>
        <Landing />
      </Styles.AppContainer>
    </ThemeProvider>
  );
}

export default App;
