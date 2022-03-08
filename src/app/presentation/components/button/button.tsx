import Image from "next/image";
import React from "react";
import { Row, Col, LogoContainer, Avatar, UserInfo } from "..";

import * as S from "./button-styles";

export const Button: React.FC = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
