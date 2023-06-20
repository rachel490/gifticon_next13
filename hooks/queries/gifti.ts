import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  getBrandAndItemList,
  getCategoryList,
  getItemDetails,
  getLastSaleItemList,
} from "@/api/fetchers";
import {
  IBrandAndItemListResponse,
  ICategoryListResponse,
  IItemDetailsResponse,
  ILastSaleItemResponse,
} from "@/types/api";

export const useGetCategoryList = () => {
  return useQuery<ICategoryListResponse, AxiosError, ICategoryListResponse, string[]>({
    queryKey: ["category list"],
    queryFn: () => getCategoryList(),
  });
};

export const useGetLastSaleItemList = () => {
  return useQuery<ILastSaleItemResponse, AxiosError, ILastSaleItemResponse, string[]>({
    queryKey: ["last sale item list"],
    queryFn: () => getLastSaleItemList(),
  });
};

export const useGetBrandAndItemList = (categoryId: number) => {
  return useQuery<
    IBrandAndItemListResponse,
    AxiosError,
    IBrandAndItemListResponse,
    [string, number]
  >({
    queryKey: ["brand & item list", categoryId],
    queryFn: () => getBrandAndItemList(categoryId),
  });
};

export const useGetItemDetails = (itemId: number) => {
  return useQuery<IItemDetailsResponse, AxiosError, IItemDetailsResponse, [string, number]>({
    queryKey: ["item details", itemId],
    queryFn: () => getItemDetails(itemId),
  });
};
