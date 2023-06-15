import Image from "next/image";
import { ICategory, IBrand } from "@/types/api";
import Text from "../Text/Text";
import * as S from "./Grid.styled";

// interface ICategoryItemData {
//   data: ICategory;
//   type: "category";
// }

// interface IBrandItemData {
//   data: IBrand;
//   type: "brand";
// }

// type IProps = ICategoryItemData | IBrandItemData;

// TODO: Interface Union으로 변경할 수 있는 방법 찾아보기
interface IProps {
  data: ICategory | IBrand;
  type: "brand" | "category";
}

function GridItem({ data, type }: IProps) {
  const { name, imageUrl } = data;

  return (
    <S.Container type={type}>
      <S.ImageWrap>
        <Image src={imageUrl} alt={name} fill />
      </S.ImageWrap>
      <Text size={12}>{name}</Text>
    </S.Container>
  );
}

export default GridItem;
