import React, { FunctionComponent } from "react";
import * as S from "./row.styles";
import { RowProps } from "./row.types";

export const Row: FunctionComponent<RowProps> = ({
  noGutters = false,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  ...rest
}) => (
  <S.Wrapper
    className="row"
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    noGutters={noGutters}
    {...rest}
  >
    {children}
  </S.Wrapper>
);
