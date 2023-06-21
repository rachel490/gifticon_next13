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

export interface IBrandAndItems extends IBrand {
  conItems: IConItem[];
}

export interface IDescriptionImage {
  url: string;
  priority: number;
  conItemDescriptionImageCode: {
    key: string;
    name: string;
  };
}

export interface IOption {
  expireAt: string;
  count: string;
  sellingPrice: string;
  isSoonConItemOption: string;
}

export interface IFAQCategory {
  id: number;
  key: string;
  name: string;
}

export interface IFAQItem {
  id: number;
  question: string;
  answer: string;
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
  descriptionImages: IDescriptionImage[];
  savingRatio: number;
  conCategory2: IBrandDetail & {
    conCategory1: ICategoryDetail;
  };
  options: IOption[];
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

// RESPONSE
export interface ICategoryListResponse {
  conCategory1s: ICategory[];
}

export interface ILastSaleItemResponse {
  conItems: ILastSaleItem[];
}

export interface IBrandAndItemListResponse {
  conCategory1: ICategory & {
    conCategory2s: IBrandAndItems[];
  };
}

export interface IItemDetailsResponse {
  conItem: IConItemDetail;
}

export interface IFAQCategoryListResponse {
  qaTypes: IFAQCategory[];
}

export interface IFAQListResponse {
  qas: IFAQItem[];
}
