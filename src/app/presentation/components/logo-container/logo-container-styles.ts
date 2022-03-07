import styled, { css } from "styled-components";
import { Col } from "..";

type CircleProps = {
  size: number;
  color: string;
};

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.greyscale.black};
  height: 4rem;
  width: 16rem;
  margin-top: 4rem;
  color: ${({ theme }) => theme.color.system.primary.default};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Circle = styled.div<CircleProps>`
  ${({ size, color }) => css`
    width: ${size}rem;
    height: ${size}rem;
    border-radius: 50%;
    background-color: ${color};
    margin-right: 0.3rem;
  `}
`;
