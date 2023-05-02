export interface ICategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface ICategoryDetail extends ICategory {
  createdAt: string;
  priority: number;
  info: string;
}

export interface IConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  imageUrl: string;
}

export interface IBrand {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: IConItem[];
}

export interface IBrandDetail extends Omit<IBrand, "conItems"> {
  adminUserId: number;
  priority: number;
  createdAt: string;
  info: null | string;
}

export interface IConItemDetail extends IConItem {
  ncSellingPrice: number;
  information: string | null;
  tip: string | null;
  warning: string | null;
  discountRate: number;
  info: string | null;
  isOnlyAccount: 0 | 1;
  conCategory2Id: number;
  descriptionImageUrl: null | string;
  topDescriptionImageUrl: null | string;
  bottomDescriptionImageUrl: null | string;
  tutorialImageUrl: null | string;
  shortcutUrl: null | string;
  descriptionImages: string[];
  savingRatio: number;
  conCategory2: IBrandDetail & {
    conCategory1: ICategoryDetail;
  };
  options: [];
}

export interface ILastSaleItem extends Omit<IConItemDetail, "descriptionImages" | "options"> {
  expireAt: string;
  createdAt: string;
  sfId: string;
  askingPrice: number;
  isRefuse: 0 | 1;
  isBlock: 0 | 1;
  isBarcode: boolean;
}
