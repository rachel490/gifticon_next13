import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/api/fetchers";
import { ICategoryListResponse } from "@/types/api";

export const useGetCategoryList = () => {
  return useQuery<ICategoryListResponse, AxiosError, ICategoryListResponse, string[]>({
    queryKey: ["category list"],
    queryFn: () => getCategoryList(),
  });
};
