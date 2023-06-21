import { ReactNode } from "react";
import * as S from "./Button.styled";

interface IProps {
  type: "submit" | "button" | "reset";
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

function Button({ type, children, onClick, disabled }: IProps) {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
}

export default Button;
