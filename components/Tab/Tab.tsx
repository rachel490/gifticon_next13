"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ICategory, IFAQCategory } from "@/types/api";
import { Text } from "../Text";
import * as S from "./Tab.styled";

export interface IProps {
  type: "category" | "faq";
  data: ICategory[] | IFAQCategory[];
}

function Tab({ type, data }: IProps) {
  const param = useParams();

  const [currentMenu, setCurrentMenu] = useState("");

  useEffect(() => {
    if (param.categoryId) {
      const currentCategory = (data as ICategory[]).filter(
        category => category.id === Number(param.categoryId),
      )[0];
      setCurrentMenu(currentCategory.name);
    } else {
      setCurrentMenu(data[0].name);
    }
  }, []);

  const handleClick = (menuName: string) => {
    setCurrentMenu(menuName);
  };

  return (
    <S.Wrap type={type}>
      <S.MenuList>
        {data.map(item => (
          <S.MenuItem key={item.id} className={currentMenu === item.name ? "isSelected" : ""}>
            {type === "category" ? (
              <Link
                href={{ pathname: `/categories/${item.id}`, query: { cateName: item.name } }}
                aria-label={`${item.name} 카테고리로 이동`}
              >
                <Text>{item.name}</Text>
              </Link>
            ) : (
              <button
                type="button"
                aria-label={`${item.name} 탭으로 이동`}
                onClick={() => handleClick(item.name)}
              >
                <Text color="inherit">{item.name}</Text>
              </button>
            )}
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.Wrap>
  );
}

export default Tab;
