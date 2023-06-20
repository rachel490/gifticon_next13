"use client";

import { useParams } from "next/navigation";
import { useGetBrandAndItemList, useGetCategoryList } from "@/hooks/queries/gifti";
import Grid from "@/components/Grid/Grid";
import Tab from "@/components/Tab/Tab";

function CategoryPage() {
  const params = useParams();

  const {
    data: categoryListData,
    isLoading: isLoadingCategoryListData,
    isError: isErrorCategoryListData,
  } = useGetCategoryList();

  const {
    data: brandAndItemListData,
    isLoading: isLoadingBrandAndItemListData,
    isError: isErrorBrandAndItemListData,
  } = useGetBrandAndItemList(Number(params?.categoryId));

  if (isLoadingCategoryListData || isLoadingBrandAndItemListData) return <h1>Loading...</h1>;
  if (isErrorCategoryListData || isErrorBrandAndItemListData) return <h1>Error...</h1>;

  return (
    <>
      <Tab type="category" data={categoryListData.conCategory1s} />
      <Grid data={brandAndItemListData.conCategory1.conCategory2s} type="brand" />
    </>
  );
}

export default CategoryPage;
