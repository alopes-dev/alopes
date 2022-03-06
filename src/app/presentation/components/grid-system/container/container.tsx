import React, { FunctionComponent } from "react";
import * as S from "./container.styles";
import { ContainerProps } from "./container.types";

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...rest
}) => {
  return (
    <S.Wrapper className="container" {...rest}>
      {children}
    </S.Wrapper>
  );
};
