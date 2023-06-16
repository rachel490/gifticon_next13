"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Text } from "../Text";
import * as S from "./Tab.styled";

const TAB_MENU = {
  category: [
    "땡처리콘",
    "카페",
    "편의점·마트",
    "디저트",
    "패스트푸드",
    "문화·게임·영화",
    "외식·분식",
    "백화점·주유·뷰티",
    "휴대폰 데이터",
  ],
  faq: ["구매", "판매"],
};

export interface IProps {
  type: "category" | "faq";
}

function Tab({ type }: IProps) {
  const param = useParams();

  const [currentMenu, setCurrentMenu] = useState("");

  useEffect(() => {
    if (param.brandId) {
      const decodedParam = decodeURI(param.brandId);
      setCurrentMenu(decodedParam);
    } else {
      setCurrentMenu(TAB_MENU[type][0]);
    }
  }, []);

  const handleClick = (menuItem: string) => {
    setCurrentMenu(menuItem);
  };

  return (
    <S.Wrap type={type}>
      <S.MenuList>
        {TAB_MENU[type].map(item => (
          <S.MenuItem key={item} className={currentMenu === item ? "isSelected" : ""}>
            {type === "category" ? (
              <Link href={`/brands/${item}`} aria-label={`${item} 카테고리로 이동`}>
                <Text>{item}</Text>
              </Link>
            ) : (
              <button
                type="button"
                aria-label={`${item} 탭으로 이동`}
                onClick={() => handleClick(item)}
              >
                <Text color="inherit">{item}</Text>
              </button>
            )}
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.Wrap>
  );
}

export default Tab;
