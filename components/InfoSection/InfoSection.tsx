/* eslint-disable import/no-cycle */
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "styled-components";
import { INoticeObj } from "@/app/items/[itemId]/page";
import { IDescriptionImage } from "@/types/api";
import { Text } from "../Text";
import * as S from "./InfoSection.styled";

interface IProps {
  descriptionImages?: IDescriptionImage[];
  noticeInfos: INoticeObj;
}

function InfoSection({ descriptionImages, noticeInfos }: IProps) {
  const { color } = useTheme();

  const tabMenuArray = descriptionImages?.length ? ["상품설명", "유의사항"] : ["유의사항"];

  const [currentTab, setCurrentTab] = useState(tabMenuArray[0]);

  return (
    <>
      <S.ButtonWrap>
        {tabMenuArray.map(menuName => (
          <button
            key={menuName}
            className={currentTab === menuName ? "isSelected" : ""}
            onClick={() => setCurrentTab(menuName)}
          >
            {menuName}
          </button>
        ))}
      </S.ButtonWrap>
      {descriptionImages && currentTab === "상품설명" && (
        <div>
          {descriptionImages.map(image => (
            <S.ImageWrap key={image.priority}>
              <Image src={image.url} alt="description" fill />
            </S.ImageWrap>
          ))}
        </div>
      )}
      {currentTab === "유의사항" && (
        <S.NoticeInfoContainer>
          {Object.keys(noticeInfos).map(key => (
            <S.NoticeInfo key={key}>
              <Text as="h3" weight="regular">
                {noticeInfos[key].title}
              </Text>
              <ul>
                {noticeInfos[key].data?.split("\n").map(infoItem => (
                  <li key={infoItem}>
                    <Text as="p" size={12} color={color.neutral500}>
                      {infoItem}
                    </Text>
                  </li>
                ))}
              </ul>
            </S.NoticeInfo>
          ))}
        </S.NoticeInfoContainer>
      )}
    </>
  );
}

export default InfoSection;
