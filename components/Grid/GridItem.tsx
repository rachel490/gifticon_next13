import Image from "next/image";
import { ICategory, IBrand } from "@/types/api";
import Text from "../Text/Text";
import * as S from "./Grid.styled";

interface IProp {
  data: ICategory | IBrand;
}

function GridItem({ data }: IProp) {
  return (
    <S.Container>
      <S.ImageWrap>
        <Image src={data.imageUrl} alt={data.name} fill />
      </S.ImageWrap>
      <Text size={12}>{data.name}</Text>
    </S.Container>
  );
}

export default GridItem;
