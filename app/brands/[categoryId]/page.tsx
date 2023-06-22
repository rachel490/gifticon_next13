"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { IConItem } from "@/types/api";
import { useGetBrandAndItemList } from "@/hooks/queries/gifti";
import BrandHeader from "@/components/BrandHeader/BrandHeader";
import Card from "@/components/Card/Card";

function ItemListPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const brandName = searchParams.get("conCate2");

  const [currentBrandMenuList, setCurrentBrandMenuList] = useState<IConItem[]>([]);

  const {
    data: brandAndItemListData,
    isLoading,
    isError,
  } = useGetBrandAndItemList(Number(params?.categoryId));

  const selectedBrand = brandAndItemListData?.conCategory1.conCategory2s.filter(brand => {
    return brand.name === brandName;
  });

  useEffect(() => {
    if (!selectedBrand) return;
    setCurrentBrandMenuList(selectedBrand[0].conItems);
  }, [selectedBrand]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <>
      <BrandHeader count={currentBrandMenuList.length} />
      <div>
        {currentBrandMenuList.map(menuItem => (
          <Link href={`/items/${menuItem.id}`} key={menuItem.id}>
            <Card type="menuListItem" data={menuItem} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ItemListPage;
