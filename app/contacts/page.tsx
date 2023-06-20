"use client";

import { useGetFAQCategoryList, useGetFAQList } from "@/hooks/queries/gifti";
import Tab from "@/components/Tab/Tab";

function FAQPage() {
  const {
    data: FAQCategoryListData,
    isLoading: isLoadingFAQCategoryListData,
    isError: isErrorFAQCategoryListData,
  } = useGetFAQCategoryList();

  const {
    data: FAQListData,
    isLoading: isLoadingFAQListData,
    isError: isErrorFAQListData,
  } = useGetFAQList(1);

  if (isLoadingFAQCategoryListData || isLoadingFAQListData) return <h1>Loading...</h1>;
  if (isErrorFAQCategoryListData || isErrorFAQListData) return <h1>Error...</h1>;

  return (
    <div>
      <Tab type="faq" data={FAQCategoryListData.qaTypes} />
      <div>
        {FAQListData.qas.map(item => (
          <p key={item.id}>{item.question}</p>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
