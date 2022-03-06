import { css } from "styled-components";
import { MarginExtensionProps } from "..";

export const MarginExtension = css<MarginExtensionProps>`
  ${({ theme, mt }) => (mt ? `margin-top: ${theme.spacing[mt]}` : null)};

  ${({ theme, mb }) => (mb ? `margin-bottom: ${theme.spacing[mb]}` : null)};
`;
