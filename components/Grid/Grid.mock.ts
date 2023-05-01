import { IBrand, ICategory } from "@/types/api";

export const categoryMockData: ICategory[] = [
  {
    id: 1,
    name: "땡철이",
    discountRate: 0,
    imageUrl: "https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg",
  },
  {
    id: 1,
    name: "땡철이",
    discountRate: 0,
    imageUrl: "https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg",
  },
  {
    id: 1,
    name: "땡철이",
    discountRate: 0,
    imageUrl: "https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg",
  },
];

export const brandMockData: IBrand[] = [
  {
    id: 63,
    name: "스타벅스",
    conCategory1Id: 67,
    imageUrl: "https://d1tftw9jjs9bx5.cloudfront.net/cf5c9abb-8f95-43b3-8cab-c2152ce544b7.jpg",
    conItems: [],
  },
  {
    id: 70,
    name: "투썸플레이스",
    conCategory1Id: 67,
    imageUrl: "https://d1tftw9jjs9bx5.cloudfront.net/d6a5bca1-6cc6-4c84-be56-cbb5f3829b5b.jpg",
    conItems: [],
  },
  {
    id: 64,
    name: "커피빈",
    conCategory1Id: 67,
    imageUrl: "https://d1tftw9jjs9bx5.cloudfront.net/woGNJbZ15p.png",
    conItems: [
      {
        id: 181,
        name: "1만원권",
        originalPrice: 10000,
        minSellingPrice: 8540,
        imageUrl: "https://d2na9jaypdrp94.cloudfront.net/RTAsPu4xVF.png",
      },
    ],
  },
];
