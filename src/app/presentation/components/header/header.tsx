import Image from "next/image";
import React from "react";
import { Row, Col } from "..";

import * as S from "./header-styles";

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <h1>Alopes</h1>
      </S.LeftSide>
      <S.RightSide>
        <S.DesignBackground />
      </S.RightSide>
    </S.Wrapper>
  );
};
