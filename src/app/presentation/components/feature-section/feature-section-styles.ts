import styled from "styled-components";
import { Col } from "..";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "62px",
  backgroundColor: theme.color.greyscale.white,
  alignItems: "center",
  position: "relative",
}));

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 92%;
  > div.title {
    height: 9px;
    justify-content: flex-start;
    display: flex;
    width: 579px;
    padding-left: 5px;
    align-items: center;
    align-items: center;
    > span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.color.greyscale.black};
      width: 8rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;

  width: 322px;

  flex-direction: column;
  color: ${({ theme }) => theme.color.greyscale[400]};
  font-size: 20px;
  > p {
    margin-bottom: 11px;
    font-weight: 300;
    margin-top: 16px;
    font-size: 16px;
  }
  > h3 {
    margin: 0;
  }
`;

export const Line = styled.div`
  width: 26px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.greyscale.black};
  margin-right: 0.7rem;
`;

export const ImageContainer = styled("div")(({ theme }) => ({
  width: "100px",
  height: "100px",
  paddingLeft: "6rem",
  zIndex: 9,
  position: "absolute",
  left: "0",
  bottom: "-49px",
}));
