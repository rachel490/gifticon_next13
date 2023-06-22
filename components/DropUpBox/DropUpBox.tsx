import { useState } from "react";
import Image from "next/image";
import { IOption } from "@/types/api";
import { parseDate } from "@/utils/parseDate";
import SelectOption from "../SelectOption/SelectOption";
import Button from "../Button/Button";
import { Text } from "../Text";
import * as S from "./DropUpBox.styled";

interface IProps {
  data: IOption[];
}

function DropUpBox({ data }: IProps) {
  const [optionModalOpen, setOptionModalOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const handleButtonClick = () => {
    if (selectedOption) {
      alert("구매완료!!");
    } else {
      toggleOptionModalOpen();
    }
  };

  const toggleOptionModalOpen = () => {
    setOptionModalOpen(prev => !prev);
  };

  const handleOptionSelect = (option: IOption) => {
    setSelectedOption(option);
    toggleOptionModalOpen();
  };

  return (
    <S.Container>
      <S.OptionListContainer optionModalOpen={optionModalOpen}>
        <S.Title>
          <Text>옵션 선택하기</Text>
        </S.Title>
        <S.OptionList>
          {data.map(option => (
            <SelectOption
              key={option.count + option.sellingPrice}
              data={option}
              discountRate={14}
              onClick={() => handleOptionSelect(option)}
            />
          ))}
        </S.OptionList>
      </S.OptionListContainer>
      {selectedOption && !optionModalOpen && (
        <S.CurrentOptionWrap>
          <S.CurrentOption onClick={toggleOptionModalOpen}>
            <Text>{`${parseDate(selectedOption.expireAt)} 까지 / ${Number(
              selectedOption.sellingPrice,
            ).toLocaleString()}원`}</Text>
            <Image src="/assets/pencil.svg" alt="icon" width="16" height="16" />
          </S.CurrentOption>
        </S.CurrentOptionWrap>
      )}
      <Button type="button" onClick={handleButtonClick} disabled={optionModalOpen}>
        {!selectedOption && !optionModalOpen ? "옵션 선택히기" : "구매하기"}
      </Button>
    </S.Container>
  );
}

export default DropUpBox;
