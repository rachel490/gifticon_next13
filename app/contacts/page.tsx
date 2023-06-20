"use client";

import { useGetFAQCategoryList } from "@/hooks/queries/gifti";
import Tab from "@/components/Tab/Tab";

function FAQPage() {
  const { data: FAQCategoryListData, isLoading, isError } = useGetFAQCategoryList();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      <Tab type="faq" data={FAQCategoryListData.qaTypes} />
    </div>
  );
}

export default FAQPage;
