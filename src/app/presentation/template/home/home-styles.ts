import styled from "styled-components";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundImage: "url(/background-details.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
