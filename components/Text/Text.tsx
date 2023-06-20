import { ReactNode } from "react";
import * as S from "./Text.styled";

interface IProps {
  size?: number;
  color?: string;
  weight?: "regular" | "medium" | "semiBold";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  className?: string;
}

function Text({
  size = 14,
  color = "#000",
  weight = "medium",
  as = "span",
  children,
  className,
}: IProps) {
  return (
    <S.CustomText size={size} weight={weight} color={color} as={as} className={className}>
      {children}
    </S.CustomText>
  );
}

export default Text;
