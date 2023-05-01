export interface ICategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
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
