import { usePathname, useSearchParams } from "next/navigation";
import { BASE_ROUTES } from "@/constants/routes";
import { checkPage } from "@/utils/checkPage";
import { CloseIcon, HamburgerIcon, PrevIcon } from "../Icons";
import Text from "../Text/Text";
import * as S from "./Navbar.styled";

const NAV_INFO = {
  [BASE_ROUTES.HOME]: {
    left: <HamburgerIcon />,
    title: "니콘내콘",
  },
  [BASE_ROUTES.BRAND]: {
    left: <PrevIcon />,
    // title : 카테고리명 동적으로 렌더
  },
  [BASE_ROUTES.ITEMLIST]: {
    left: <PrevIcon />,
    // title : 브랜드명 동적으로 렌더
  },
  [BASE_ROUTES.ITEMDETAILS]: {
    left: <PrevIcon />,
    title: " ",
  },
  [BASE_ROUTES.FAQ]: {
    right: <CloseIcon />,
    title: "고객센터",
  },
};

function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, currentLeaf] = checkPage(pathname);
  const currentNav = NAV_INFO[`/${currentPage}`];

  let navTitle = currentNav.title;

  if (searchParams.get("cateName")) {
    navTitle = searchParams.get("cateName") as string;
  } else if (searchParams.get("conCate2")) {
    navTitle = searchParams.get("conCate2") as string;
  }

  return (
    <S.NavContainer>
      <S.NavLeft>{currentNav.left}</S.NavLeft>
      <S.NavTitle>
        <Text as="h3" size={15}>
          {navTitle}
        </Text>
      </S.NavTitle>
      <S.NavRight>{currentNav.right}</S.NavRight>
    </S.NavContainer>
  );
}

export default Navbar;
