"use client";

import { brandMockData, categoryMockData } from "./Grid.mock";
import GridItem from "./GridItem";
import * as S from "./Grid.styled";

function Grid() {
  return (
    <S.GridContainer>
      {categoryMockData.map(itemData => (
        <GridItem key={itemData.id} data={itemData} />
      ))}
    </S.GridContainer>
  );
}

export default Grid;
