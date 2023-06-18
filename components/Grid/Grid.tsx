"use client";

import Link from "next/link";
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
        <Link href={`/categories/${itemData.id}`} key={itemData.id}>
          <GridItem data={itemData} type={type} />
        </Link>
      ))}
    </S.GridContainer>
  );
}

export default Grid;
