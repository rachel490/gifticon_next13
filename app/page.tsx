"use client";

import CardList from "@/components/Card/CardList";
import Grid from "@/components/Grid/Grid";
import { brandMockData } from "@/components/Grid/Grid.mock";
import { useGetCategoryList } from "@/hooks/queries/gifti";

function HomePage() {
  const { data: categoryListData, isLoading, isError } = useGetCategoryList();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      <Grid data={categoryListData.conCategory1s} type="category" />
      <Grid data={brandMockData} type="brand" />
      <CardList />
    </div>
  );
}

export default HomePage;
