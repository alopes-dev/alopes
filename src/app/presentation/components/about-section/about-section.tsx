import Image from "next/image";
import React from "react";
import { Row, Col, LogoContainer, Avatar, UserInfo } from "..";

import * as S from "./about-section-styles";

export const AboutSection: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <div className="title">
          <S.Line /> <span>About me</span>
        </div>
        <S.Description>
          <p>
            A catchy and a bit intriguing phrase “The We Are Honest Folks” makes
            you scroll down for more details. Two short messages with no cliches
            or beaten expressions tell about the company’s ideology and the
            studio. Photos and animations of the team and their studio in warm
            colors recapture the atmosphere of the place and encourage them to
            contact these people.
          </p>
          <span>
            Toby is the guy who has designed and built the Vogue Thailand
            website. It is one of his major achievements rightly placed at the
            top of the page to fuel your interest. Then, you discover a short
            self-introduction, where Toby shortly describes his skills and
            working process flow, and portfolio. Interchanging minimalistic
            blocks with white background and images of a busy city help to
            achieve the balance
          </span>
        </S.Description>
      </S.TitleContainer>
      <S.ImageContainer>
        <Image src="/cicles.svg" width="100" height="120" />
      </S.ImageContainer>
    </S.Wrapper>
  );
};
