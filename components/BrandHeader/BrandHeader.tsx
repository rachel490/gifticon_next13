import { useTheme } from "styled-components";
import { Text } from "../Text";
import * as S from "./BrandHeader.styled";

interface IProps {
  count: number;
}

function BrandHeader({ count }: IProps) {
  const { color } = useTheme();

  return (
    <S.Container>
      <Text color={color.neutral500}>
        <strong>{count}</strong>
        개의 상품
      </Text>
    </S.Container>
  );
}

export default BrandHeader;
