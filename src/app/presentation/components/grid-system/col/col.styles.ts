import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { getColWidth, emptyResult } from "./col.helper";
import {
  ColProps,
  ColSize,
  ComplexType,
  JustifyType,
  AlignItemsType,
} from "./col.types";
import { theme, KeysofSpacing, MarginExtension } from "~/app/theme/index";

const wrapperModifiers = {
  colWidth: (value?: string) => css`
    flex: 0 0 auto;
    width: ${getColWidth(`${value}`)};
  `,
  getOffset: (value?: string) => css`
    margin-left: ${getColWidth(`${value}`)};
  `,
  gutterX: (value: KeysofSpacing) => css`
    padding-left: ${theme.spacing[value]};
    padding-right: ${theme.spacing[value]};
  `,
  gutterY: (value: KeysofSpacing) => css`
    padding-top: ${theme.spacing[value]};
    padding-bottom: ${theme.spacing[value]};
  `,

  justify: (prop: JustifyType) => css`
    display: flex;
    justify-content: ${prop};
  `,
  alignItems: (prop: AlignItemsType) => css`
    display: flex;
    align-items: ${prop};
  `,
};

const resolverCss = (width?: ColSize | ComplexType) => {
  let colResolver,
    offsetResolver,
    gxResolver,
    gyResolver: FlattenSimpleInterpolation;

  if (typeof width === "object") {
    const { size, offset, gx, gy } = width;
    colResolver = size ? wrapperModifiers.colWidth(size) : emptyResult;
    offsetResolver = offset ? wrapperModifiers.getOffset(offset) : emptyResult;
    gxResolver = gx ? wrapperModifiers.gutterX(gx) : emptyResult;
    gyResolver = gy ? wrapperModifiers.gutterY(gy) : emptyResult;
  } else {
    colResolver = wrapperModifiers.colWidth(width);
    offsetResolver = emptyResult;
    gxResolver = emptyResult;
    gyResolver = emptyResult;
  }

  return css`
    ${colResolver}
    ${offsetResolver}
    ${gxResolver}
    ${gyResolver}
  `;
};

export const Wrapper = styled.div<ColProps>`
  ${({
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    offset,
    gx,
    gy,
    theme,
    alignItems,
    justifyContent,
  }) => css`
    ${MarginExtension}

    padding: ${theme.spacing[8]} calc(1.5rem * 0.5);
    box-sizing: border-box;
    max-width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;

    ${!!gx && wrapperModifiers.gutterX(gx)}
    ${!!gy && wrapperModifiers.gutterY(gy)}
    ${!!offset && wrapperModifiers.getOffset(offset)}

    ${alignItems && wrapperModifiers.alignItems(alignItems)}
    ${justifyContent && wrapperModifiers.justify(justifyContent)}

    @media (min-width: 0rem) {
      ${!!xs && resolverCss(xs)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }

    @media (min-width: 36rem) {
      ${!!sm && resolverCss(sm)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }

    @media (min-width: 48rem) {
      ${!!md && resolverCss(md)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }
    @media (min-width: 62rem) {
      ${!!lg && resolverCss(lg)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }
    @media (min-width: 75rem) {
      ${!!xl && resolverCss(xl)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }
    @media (min-width: 87.5rem) {
      ${!!xxl && resolverCss(xxl)}
      ${!!offset && wrapperModifiers.getOffset(offset)}
    }
  `}
`;
