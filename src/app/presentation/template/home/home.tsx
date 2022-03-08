import React from "react";
import {
  Header,
  AboutSection,
  FeatureSection,
} from "~/app/presentation/components";

import * as S from "./home-styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <FeatureSection />
    </>
  );
};

export default Home;
