import styled from "styled-components";

import { Tint, WIDTH } from "../global_styles/Structure";

export const Container = styled.div`
  position: relative;
  display: flex;
  min-width: ${WIDTH}px;
  min-height: 100vh;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;

  ${Tint("black", 0.7)}
`;
