import styled from "styled-components";

export const DualityContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DualityText = styled.div`
  width: 500px;
  position: relative;
  z-index: 69;
`;

export const SmallText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: -50px;
  top: 80px;

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 15px;
    left: 15px;
    right: 15px;
    background-color: #ffa800;
    opacity: 0.33;
    transform: rotate(2.2deg) translateY(-20%);
    z-index: 2;
  }
`;

export const Image = styled.img`
  transform: rotate(3.4deg) translateY(-20%);
`;

export const UpBtn = styled.div`
  display: flex;
  padding: 10px;
  color: ${({ theme }) => theme.colors.orange};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.orange};
  position: absolute;
  border-radius: 30px;
  cursor: pointer;
  bottom: 20px;
  left: 20px;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-20%);
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`;
