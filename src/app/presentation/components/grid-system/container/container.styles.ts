import styled, { css } from "styled-components";
import { ContainerProps } from "./container.types";
import { MarginExtension } from "~/app/presentation/styles";

export const Wrapper = styled.div<ContainerProps>`
  ${({ theme }) => css`
    ${MarginExtension}

    width: 100%;
    padding-right: ${theme.spacing[8]};
    padding-left: ${theme.spacing[8]};
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 0rem) {
      max-width: 100%;
    }

    @media (min-width: 36rem) {
      max-width: 54rem;
    }

    @media (min-width: 48rem) {
      max-width: 72rem;
    }
    @media (min-width: 62rem) {
      max-width: 96rem;
    }
    @media (min-width: 75rem) {
      max-width: 114rem;
    }
    @media (min-width: 87.5rem) {
      max-width: 132rem;
    }
  `}
`;
