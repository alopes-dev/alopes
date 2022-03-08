import React from "react";

import * as S from "./feature-list.styles";

export const FeatureList: React.FC = () => {
  return (
    <S.FeatureList>
      {[
        { name: "name", id: "name" },
        { name: "name", id: "name" },
        { name: "name", id: "name" },
        { name: "name", id: "name" },
        { name: "name", id: "name" },
        { name: "name", id: "name" },
        { name: "name", id: "name" },
      ].map((feature) => (
        <li key={feature.id}>
          <strong>{feature.name}</strong>

          <span>Adicionar ao carrinho</span>
        </li>
      ))}
    </S.FeatureList>
  );
};
