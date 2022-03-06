import React, { FunctionComponent } from "react";
import * as S from "./col.styles";
import { ColProps } from "./col.types";

export const Col: FunctionComponent<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  gx,
  gy,
  justifyContent,
  alignItems,
  children,
  ...rest
}) => (
  <S.Wrapper
    className="col"
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    xxl={xxl}
    offset={offset}
    gx={gx}
    gy={gy}
    justifyContent={justifyContent}
    alignItems={alignItems}
    {...rest}
  >
    {children}
  </S.Wrapper>
);
