/* eslint-disable import/no-cycle */

"use client";

import { useParams } from "next/navigation";
import { useGetItemDetails } from "@/hooks/queries/gifti";
import Card from "@/components/Card/Card";
import DropUpBox from "@/components/DropUpBox/DropUpBox";
import { IConItemDetail } from "@/types/api";

const REFUND_INFO =
  "·  니콘내콘에서 판매되는 쿠폰은 개인 간 거래를 통해 리셀링되는 상품으로 환불 및 유효기간 연장이 불가합니다.\n· 쿠폰 사용이 불가할 경우, 카카오톡 플러스친구 @니콘내콘으로 문의해주시기 바랍니다.";

export interface INoticeObj {
  [key: string]: {
    title: string;
    data: string | null;
  };
}

const generateNoticeInfoObject = (data: IConItemDetail) => {
  const noticeObj: INoticeObj = {
    item: { title: "상품 유의사항", data: data.info },
    brand: { title: "브랜드 유의사항", data: data.conCategory2.info },
    category: { title: "유의사항", data: data.conCategory2.conCategory1.info },
    refund: { title: "환불규정", data: REFUND_INFO },
  };

  const filteredNoticeObj = Object.entries(noticeObj).reduce((acc: INoticeObj, [key, value]) => {
    if (value.data !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return filteredNoticeObj;
};

function ItemDetailsPage() {
  const params = useParams();

  const { data: itemDetailsData, isLoading, isError } = useGetItemDetails(Number(params.itemId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const noticeInfo = generateNoticeInfoObject(itemDetailsData.conItem);

  console.log("notice info", noticeInfo);

  return (
    <>
      <Card type="menuDetailItem" data={itemDetailsData.conItem} />
      <DropUpBox data={itemDetailsData.conItem.options} />
    </>
  );
}

export default ItemDetailsPage;
