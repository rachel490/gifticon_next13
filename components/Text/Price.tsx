import * as S from "./Price.styled";

interface IProps {
  children: number;
  type: "original" | "discount";
}

function Price({ children, type }: IProps) {
  return <S.PriceText type={type}>{`${children.toLocaleString()}원`}</S.PriceText>;
}

export default Price;
