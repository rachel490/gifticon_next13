"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useGetBrandAndItemList } from "@/hooks/queries/gifti";
import Card from "@/components/Card/Card";

function BrandPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const {
    data: brandAndItemListData,
    isLoading,
    isError,
  } = useGetBrandAndItemList(Number(params?.categoryId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const brandId = searchParams.get("conCate2");
  const currentBrandMenuList = brandAndItemListData.conCategory1.conCategory2s.filter(
    brand => brand.id === Number(brandId),
  )[0].conItems;

  return (
    <div>
      <div>
        {currentBrandMenuList.map(menuItem => (
          <Card type="menuListItem" data={menuItem} key={menuItem.id} />
        ))}
      </div>
    </div>
  );
}

export default BrandPage;
