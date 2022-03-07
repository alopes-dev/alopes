import styled, { css } from "styled-components";
import { Col } from "..";

export const Wrapper = styled.div`
  display: flex;
  height: 8rem;
  width: 16rem;
  flex-direction: column;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.system.primary.default};
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.greyscale.white};
    height: 5rem;
    width: 5rem;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: ${theme.color.greyscale.black};
    border: 2px solid ${theme.color.system.primary.default};
    padding: 2px;
    > span > img {
      border-radius: 50%;
    }
  `};
`;

export const Line = styled.div`
  width: 10px;
  height: 2px;
  margin: 3rem;
  background-color: ${({ theme }) => theme.color.greyscale.black};
`;
