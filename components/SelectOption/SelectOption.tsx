import { useTheme } from "styled-components";
import { parseDate } from "@/utils/parseDate";
import { IOption } from "@/types/api";
import { Text } from "../Text";
import * as S from "./SelectOption.styled";

interface IProps {
  data: IOption;
  discountRate: number;
  onClick: () => void;
}

function SelectOption({ data, discountRate, onClick }: IProps) {
  const { color } = useTheme();

  return (
    <S.Wrap onClick={onClick}>
      <S.LeftInfo>
        <S.InfoRow>
          <Text>유효기간</Text>
          <Text>{`${parseDate(data.expireAt)} 까지`}</Text>
        </S.InfoRow>
        <S.InfoRow>
          <Text>할인가</Text>
          <Text>{Number(data.sellingPrice).toLocaleString()}원</Text>
        </S.InfoRow>
      </S.LeftInfo>
      <Text size={16} color={color.primary}>
        {discountRate}%
      </Text>
    </S.Wrap>
  );
}

export default SelectOption;
