import Image from "next/image";
import React from "react";
import { Row, Col, Button } from "..";

import * as S from "./user-info-styles";

export const UserInfo: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <div className="title">
          <S.Line /> <span>Software Developer</span>
        </div>
        <S.Description>
          <p>Hi people, I'm António Lopes, Software Developer</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
          <Button>See Features</Button>
        </S.Description>
      </S.TitleContainer>
    </S.Wrapper>
  );
};
