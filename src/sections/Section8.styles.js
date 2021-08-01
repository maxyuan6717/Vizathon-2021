import styled from "styled-components";

import { Tint, WIDTH } from "../global_styles/Structure";

export const Container = styled.div`
  position: relative;
  display: flex;
  min-width: ${WIDTH}px;
  background-image: url(${({ src }) => src});
  background-size: cover;

  ${Tint("black", 0.5)}
`;
