import styled from "styled-components";

export const DualityContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DualityText = styled.div`
  width: 600px;
  position: relative;
  z-index: 69;
`;

export const SmallText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: -25px;
  top: 0;

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 15px;
    left: 15px;
    right: 15px;
    background-color: #ffa800;
    opacity: 0.5;
    transform: rotate(2.2deg) translateY(-20%);
    z-index: 2;
  }
`;

export const Image = styled.img`
  transform: rotate(3.4deg) translateY(-20%);
`;
