import Image from "next/image";
import React from "react";
import { Row, Col, LogoContainer, Avatar, UserInfo } from "..";
import { FeatureList } from "./feature-list/feature.list";

import * as S from "./feature-section-styles";

export const FeatureSection: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <div className="title">
          <S.Line /> <span>Features</span>
        </div>
        <S.Description>
          <h3>I have a great potential for work</h3>
          <p>A true sales software, more powerful than average</p>
        </S.Description>
      </S.TitleContainer>
      <FeatureList />
      <S.ImageContainer>
        <Image src="/cicles.svg" width="50" height="120" />
      </S.ImageContainer>
    </S.Wrapper>
  );
};
