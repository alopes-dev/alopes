import styled, { css } from "styled-components";
import { Col } from "..";
import { theme } from "../../styles";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding: 0.3rem 1rem;
    border: 1px solid ${theme.color.system.primary.default};
    border-radius: 2px;=;
    background-color: ${theme.color.system.primary.default};
    align-items: center;
    justify-content: center;
    width: 113px;
  `}
`;
