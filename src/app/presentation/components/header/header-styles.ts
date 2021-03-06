import styled from "styled-components";
import { Col } from "..";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "62.5vh",
  padding: "0 10px",
  backgroundColor: theme.color.greyscale.white,
}));

export const LeftSide = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
}));

export const RightSide = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50%",
  height: "100%",
}));

export const DesignBackground = styled("div")(({ theme }) => ({
  backgroundImage: "url(/background-details.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "right",
  width: "100%",
  height: "74vh",
  zIndex: 9,
}));

export const ColStyled = styled(Col)(({ theme }) => ({
  position: "relative",
  padding: "0!important",
}));
