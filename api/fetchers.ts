import { ICategoryListResponse, ILastSaleItemResponse } from "@/types/api";
import ncncAxios from "./core";
import { API_URI } from "./uri";

export const getCategoryList = async () => {
  const { data } = await ncncAxios.get<ICategoryListResponse>(API_URI.categoryList);
  return data;
};

export const getLastSaleItemList = async () => {
  const { data } = await ncncAxios.get<ILastSaleItemResponse>(API_URI.lastSaleList);
  return data;
};
