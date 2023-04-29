import { IListResponese, ISingleResponse } from "./strapi";

export interface ITodoItem {
  title: string;
  desc: string;
  date: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type TTodoList = IListResponese<ITodoItem>;
export type TTodoItem = ISingleResponse<ITodoItem>;
