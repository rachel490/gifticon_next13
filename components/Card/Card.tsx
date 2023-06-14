"use client";

import Image from "next/image";
import { useTheme } from "styled-components";
import { IConItem, IConItemDetail, ILastSaleItem } from "@/types/api";
import { Text, Price, DiscountRate } from "../Text";
import * as S from "./Card.styled";

type IProps =
  | { type: "menuListItem"; data: IConItem }
  | { type: "lastSaleItem"; data: ILastSaleItem }
  | { type: "menuDetailItem"; data: IConItemDetail };

function Card({ type, data }: IProps) {
  const { color } = useTheme();

  return (
    <S.CardContainer type={type}>
      <S.ImageWrap>
        <Image src={data.imageUrl} alt={data.name} fill />
      </S.ImageWrap>
      <S.Info>
        {type !== "menuListItem" && (
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
