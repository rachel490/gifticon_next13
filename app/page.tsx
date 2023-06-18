"use client";

import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import { useGetCategoryList, useGetLastSaleItemList } from "@/hooks/queries/gifti";

function HomePage() {
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
      <Grid data={categoryListData.conCategory1s} type="category" />
      <div>
        {lastSaleItemListData.conItems.map(item => (
          <Card type="lastSaleItem" key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
