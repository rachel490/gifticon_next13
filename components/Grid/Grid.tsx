"use client";

import { ICategory, IBrand } from "@/types/api";
import GridItem from "./GridItem";
import * as S from "./Grid.styled";

interface ICategoryListData {
  data: ICategory[];
  type: "category";
}

interface IBrandListData {
  data: IBrand[];
  type: "brand";
}

type IProps = ICategoryListData | IBrandListData;

function Grid({ data, type }: IProps) {
  return (
    <S.GridContainer>
      {data.map(itemData => (
        <GridItem key={itemData.id} data={itemData} type={type} />
      ))}
    </S.GridContainer>
  );
}

export default Grid;
