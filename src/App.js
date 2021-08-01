import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
// import { Controller, Scene } from "react-scrollmagic";
// import { Tween, Timeline } from "react-gsap";

import * as Styles from "./App.styles";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Styles.Container>
//         <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
//           <Scene offset={1100} pin>
//             <Styles.Panel>
//               <Section1 />
//               <Section2 />
//             </Styles.Panel>
//           </Scene>
//           <Scene duration="900%" pin>
//             <Timeline>
//               <Styles.AbsPanel>
//                 <Section3 />
//               </Styles.AbsPanel>
//               <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel style={{ zIndex: -1 }} />
//               </Tween>
//               <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel>
//                   <Section4 />
//                 </Styles.AbsPanel>
//               </Tween>
//               <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel style={{ zIndex: -1 }} />
//               </Tween>
//               <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel>
//                   <Section5 />
//                 </Styles.AbsPanel>
//               </Tween>
//               <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel>
//                   <Section6 />
//                 </Styles.AbsPanel>
//               </Tween>
//               <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel>
//                   <Section7 />
//                 </Styles.AbsPanel>
//               </Tween>
//               <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel>
//                   <Section8 />
//                 </Styles.AbsPanel>
//               </Tween>
//               <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
//                 <Styles.AbsPanel />
//               </Tween>
//             </Timeline>
//           </Scene>
//           <Scene offset={200} pin>
//             <Styles.Panel first>
//               <Section9 />
//             </Styles.Panel>
//           </Scene>
//           <Scene pin>
//             <Styles.Panel first>
//               <Section10 />
//             </Styles.Panel>
//           </Scene>
//         </Controller>
//       </Styles.Container>
//     </ThemeProvider>
//   );
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles.AppContainer>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </Styles.AppContainer>
    </ThemeProvider>
  );
}

export default App;
