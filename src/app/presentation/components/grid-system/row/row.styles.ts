import styled, { css } from "styled-components";
import { RowProps } from "./row.types";
import { MarginExtension } from "~/app/presentation/styles";
export const getRowWidth = (value: string) => {
  if (!value) return;
  const width = 100 / +value;
  return `${width}%`;
};

const wrapperModifiers = {
  rowWidth: (value: string) => css`
    display: flex;
    > * {
      flex: 0 0 auto;
      width: ${getRowWidth(value)};
    }
  `,
  noGutters: () => css`
    padding-right: 0;
    padding-left: 0;
  `,
};

export const Wrapper = styled.div<RowProps>`
  ${({ xs, sm, md, lg, xl, xxl, noGutters }) => css`
    ${MarginExtension}

    padding: 0 1.5rem;
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(1.5rem * -0.5);
    margin-left: calc(1.5rem * -0.5);
    flex-grow: 1;
    width: 100%;

    ${noGutters && wrapperModifiers.noGutters()}

    @media (min-width: 0rem) {
      ${!!xs && wrapperModifiers.rowWidth(xs)}
    }

    @media (min-width: 36rem) {
      ${!!sm && wrapperModifiers.rowWidth(sm)}
    }

    @media (min-width: 48rem) {
      ${!!md && wrapperModifiers.rowWidth(md)}
    }
    @media (min-width: 62rem) {
      ${!!lg && wrapperModifiers.rowWidth(lg)}
    }
    @media (min-width: 75rem) {
      ${!!xl && wrapperModifiers.rowWidth(xl)}
    }
    @media (min-width: 87.5rem) {
      ${!!xxl && wrapperModifiers.rowWidth(xxl)}
    }
  `}
`;
