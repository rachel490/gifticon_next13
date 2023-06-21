"use client";

import { useParams } from "next/navigation";
import { useGetItemDetails } from "@/hooks/queries/gifti";
import Card from "@/components/Card/Card";
import DropUpBox from "@/components/DropUpBox/DropUpBox";

function ItemDetailsPage() {
  const params = useParams();

  const { data: itemDetailsData, isLoading, isError } = useGetItemDetails(Number(params.itemId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      <Card type="menuDetailItem" data={itemDetailsData.conItem} />
      <DropUpBox />
    </div>
  );
}

export default ItemDetailsPage;
