import Image from "next/image";
import React from "react";
import { Row, Col, LogoContainer, Avatar, UserInfo } from "..";

import * as S from "./header-styles";

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <LogoContainer />
        <Avatar />
        <UserInfo />
      </S.LeftSide>
      <S.RightSide>
        <S.DesignBackground />
      </S.RightSide>
    </S.Wrapper>
  );
};
