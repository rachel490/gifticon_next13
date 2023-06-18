export const API_URI = {
  categoryList: "/con-category1s",
  lastSaleList: "/con-items/soon",
  brandAndItemList: (categoryId: number) => `/con-category1s/${categoryId}/nested`,
  ItemDetails: (itemId: number) => `/con-items/${itemId}`,
  FAQCategoryList: "/qa-types",
  FAQList: (categoryId: number) => `/qas?qaTypeId=${categoryId}`,
};
