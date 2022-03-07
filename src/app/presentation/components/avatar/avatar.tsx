import Image from "next/image";
import React from "react";
import { Row, Col } from "..";

import * as S from "./avatar-styles";

export const Avatar: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Avatar>
        <Image src="/unnamed.jpg" width={100} height={100} />
      </S.Avatar>
    </S.Wrapper>
  );
};
