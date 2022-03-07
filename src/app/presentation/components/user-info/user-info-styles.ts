import styled, { css } from "styled-components";
import { Col } from "..";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.system.primary.default};
`;

export const TitleContainer = styled.div`
  width: 21rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div.title {
    width: 21rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.color.greyscale.black};
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 9.4rem;
  width: 323px;
  color: ${({ theme }) => theme.color.greyscale.black};
  font-size: 26px;
`;

export const Line = styled.div`
  width: 26px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.greyscale.black};
  margin-right: 0.7rem;
`;
