"use client";

import Link from "next/link";
import { ICategory, IBrandAndItems } from "@/types/api";
import GridItem from "./GridItem";
import * as S from "./Grid.styled";

// interface ICategoryListData {
//   data: ICategory[];
//   type: "category";
// }

// interface IBrandAndItemsListData {
//   data: IBrandAndItems[];
//   type: "brand";
// }

// type IProps = ICategoryListData | IBrandAndItemsListData;

interface IProps {
  data: ICategory[] | IBrandAndItems[];
  type: "category" | "brand";
}

const LINK_BASE_URL = {
  brand: "/brands",
  category: "categories",
};

const generateLink = (type: IProps["type"], itemData: ICategory | IBrandAndItems) => {
  if (type === "category") {
    return {
      pathname: `${LINK_BASE_URL[type]}/${itemData.id}`,
      query: { cateName: itemData.name },
    };
  }

  return {
    pathname: `${LINK_BASE_URL[type]}/${(itemData as IBrandAndItems).conCategory1Id}`,
    query: { conCate2: itemData.id },
  };
};

function Grid({ data, type }: IProps) {
  return (
    <S.GridContainer>
      {data.map(itemData => (
        <Link href={generateLink(type, itemData)} key={itemData.id}>
          <GridItem data={itemData} type={type} />
        </Link>
      ))}
    </S.GridContainer>
  );
}

export default Grid;
