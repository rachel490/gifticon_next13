import { useState } from "react";
import Image from "next/image";
import { IOption } from "@/types/api";
import { parseDate } from "@/utils/parseDate";
import SelectOption from "../SelectOption/SelectOption";
import Button from "../Button/Button";
import { Text } from "../Text";
import * as S from "./DropUpBox.styled";

const mockOptions = [
  {
    count: "925",
    expireAt: "2023-08-01T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "34",
    expireAt: "2023-08-02T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "319",
    expireAt: "2023-08-04T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
];

function DropUpBox() {
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
      <S.OptionList optionModalOpen={optionModalOpen}>
        <S.Title>
          <Text>옵션 선택하기</Text>
        </S.Title>
        {mockOptions.map(option => (
          <SelectOption
            key={option.count}
            data={option}
            discountRate={14}
            onClick={() => handleOptionSelect(option)}
          />
        ))}
      </S.OptionList>
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
