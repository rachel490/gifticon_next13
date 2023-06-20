import {
  IBrandAndItemListResponse,
  ICategoryListResponse,
  IFAQCategoryListResponse,
  IFAQListResponse,
  IItemDetailsResponse,
  ILastSaleItemResponse,
} from "@/types/api";
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

export const getBrandAndItemList = async (categoryId: number) => {
  const { data } = await ncncAxios.get<IBrandAndItemListResponse>(
    API_URI.brandAndItemList(categoryId),
  );
  return data;
};

export const getItemDetails = async (itemId: number) => {
  const { data } = await ncncAxios.get<IItemDetailsResponse>(API_URI.ItemDetails(itemId));
  return data;
};

export const getFAQCategoryList = async () => {
  const { data } = await ncncAxios.get<IFAQCategoryListResponse>(API_URI.FAQCategoryList);
  return data;
};

export const getFAQList = async (categoryId: number) => {
  const { data } = await ncncAxios.get<IFAQListResponse>(API_URI.FAQList(categoryId));
  return data;
};
