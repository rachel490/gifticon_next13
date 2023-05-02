"use client";

import Image from "next/image";
import { useTheme } from "styled-components";
import { IConItem, IConItemDetail, ILastSaleItem } from "@/types/api";
import { Text, Price, DiscountRate } from "../Text";
import * as S from "./Card.styled";

export interface ICardTypes {
  [key: string]: {
    imageSize: "m" | "l";
    hasBrandTitle: boolean;
  };
}

const types: ICardTypes = {
  menuListItem: {
    imageSize: "m",
    hasBrandTitle: false,
  },
  lastSaleItem: {
    imageSize: "m",
    hasBrandTitle: true,
  },
  menuDetailItem: {
    imageSize: "l",
    hasBrandTitle: true,
  },
};

interface IProps {
  type: "menuListItem" | "lastSaleItem" | "menuDetailItem";
  data: IConItemDetail | ILastSaleItem | IConItem;
}

function Card({ type, data }: IProps) {
  const { color } = useTheme();
  const { imageSize, hasBrandTitle } = types[type];

  return (
    <S.CardContainer size={type === "menuListItem" ? "m" : "l"}>
      <S.ImageWrap size={imageSize}>
        <Image src={data.imageUrl} alt={data.name} fill />
      </S.ImageWrap>
      <S.Info size={type === "menuListItem" ? "m" : "l"}>
        {hasBrandTitle && "conCategory2" in data && (
          <Text className="brand" weight="regular" color={color.neutral500}>
            {data.conCategory2.name}
          </Text>
        )}
        <Text className="menu" size={16} weight="regular">
          {data.name}
        </Text>
        <S.PriceWrap>
          <DiscountRate original={data.originalPrice} discounted={data.minSellingPrice} />
          <Price type="original">{data.originalPrice}</Price>
          <Price type="discount">{data.minSellingPrice}</Price>
        </S.PriceWrap>
      </S.Info>
    </S.CardContainer>
  );
}

export default Card;
