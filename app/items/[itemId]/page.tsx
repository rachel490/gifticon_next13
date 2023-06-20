"use client";

import { useParams } from "next/navigation";
import { useGetItemDetails } from "@/hooks/queries/gifti";
import Card from "@/components/Card/Card";

function MenuPage() {
  const params = useParams();

  const { data: itemDetailsData, isLoading, isError } = useGetItemDetails(Number(params.itemId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      <Card type="menuDetailItem" data={itemDetailsData.conItem} />
    </div>
  );
}

export default MenuPage;
