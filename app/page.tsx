"use client";

import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { useGetCategoryList, useGetLastSaleItemList } from "@/hooks/queries/gifti";
import { Text } from "@/components/Text";
import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import Banner from "@/components/Banner/Banner";

function HomePage() {
  const { color } = useTheme();

  const {
    data: categoryListData,
    isLoading: isLoadingCategoryListData,
    isError: isErrorCategoryListData,
  } = useGetCategoryList();
  const {
    data: lastSaleItemListData,
    isLoading: isLoadingLastSaleItemListData,
    isError: isErrorLastSaleItemListData,
  } = useGetLastSaleItemList();

  if (isLoadingCategoryListData || isLoadingLastSaleItemListData) return <h1>Loading...</h1>;
  if (isErrorCategoryListData || isErrorLastSaleItemListData) return <h1>Error...</h1>;

  return (
    <div>
      <Banner />
      <Grid data={categoryListData.conCategory1s} type="category" />
      <Section>
        <TextContainer>
          <Text color={color.primary} size={13}>
            놓치지 마세요
          </Text>
          <Text as="h3" size={16} weight="semiBold" color={color.neutral600}>
            오늘의 땡처리콘!
          </Text>
        </TextContainer>
        <CardList>
          {lastSaleItemListData.conItems.map(item => (
            <Link href={`/items/${item.id}`} key={item.id}>
              <Card type="lastSaleItem" data={item} />
            </Link>
          ))}
        </CardList>
      </Section>
    </div>
  );
}

export default HomePage;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-block: 1.2rem;
  row-gap: 1.4rem;
`;

const TextContainer = styled.div`
  margin-left: 1.7rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  span {
    line-height: 1.6rem;
  }

  h3 {
    line-height: 1.9rem;
  }
`;

const CardList = styled.div``;
