import styled from "styled-components";

import { darken } from "polished";

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 86%;
  margin-top: 34px;
  margin-bottom: 66px;
  li {
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    color: #fff;
    padding: 20px;
    background: black;
    height: 133px;
    width: 126px;
    justify-content: space-around;
    align-items: center;
    > strong {
      font-size: 16px;
      line-height: 26px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 12px;
      font-weight: 300;
      text-align: center;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
