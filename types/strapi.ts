export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ISingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: null;
}

export interface IListResponese<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: IPagination;
  };
}
