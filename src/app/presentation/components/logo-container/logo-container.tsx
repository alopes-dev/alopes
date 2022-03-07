import Image from "next/image";
import React from "react";
import { Row, Col } from "..";

import * as S from "./logo-container-styles";

export const LogoContainer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Circle
        size={1.2}
        style={{ marginRight: "16px", marginLeft: "8px", marginTop: "-20px" }}
        color="#f5d750"
      />
      <S.Circle size={1} style={{ marginTop: "16px" }} color="white" />
      <Image src="/logo2-removebg-preview.png" width={120} height={120} />
      <S.Circle size={1.2} color="white" style={{ marginTop: "-20px" }} />
      <S.Circle
        size={1}
        style={{ marginTop: "16px", marginLeft: "16px" }}
        color="#f5d750"
      />
    </S.Wrapper>
  );
};
