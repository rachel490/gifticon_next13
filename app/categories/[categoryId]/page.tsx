"use client";

import Tab from "@/components/Tab/Tab";
import { useGetCategoryList } from "@/hooks/queries/gifti";

function CategoryPage() {
  const {
    data: categoryListData,
    isLoading: isLoadingCategoryListData,
    isError: isErrorCategoryListData,
  } = useGetCategoryList();

  if (isLoadingCategoryListData) return <h1>Loading...</h1>;
  if (isErrorCategoryListData) return <h1>Error...</h1>;

  return (
    <div>
      <Tab type="category" data={categoryListData.conCategory1s} />
    </div>
  );
}

export default CategoryPage;
