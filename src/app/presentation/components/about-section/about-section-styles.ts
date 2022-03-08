import styled from "styled-components";
import { Col } from "..";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "45vh",
  marginTop: "126px",
  backgroundColor: "#f1f1f1",
}));

export const TitleContainer = styled.div`
  width: 21rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div.title {
    width: 21rem;
    display: flex;
    justify-content: center;
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

  padding-left: 29.6rem;
  width: 647px;

  flex-direction: column;
  color: ${({ theme }) => theme.color.greyscale[400]};
  font-size: 20px;
  > p {
    margin-bottom: 11px;
    font-weight: 300;
  }
  > span {
    font-size: 0.8rem;
    color: hsl(0deg 1% 37%);
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: 1px;
    margin-bottom: 20px;
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
  paddingLeft: "5rem",
  zIndex: 9,
}));
