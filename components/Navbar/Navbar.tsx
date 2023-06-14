import { usePathname } from "next/navigation";
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
    title: " ",
  },
  [BASE_ROUTES.FAQ]: {
    right: <CloseIcon />,
    title: "고객센터",
  },
};

function Navbar() {
  const pathname = usePathname();

  const [currentPage, currentLeaf] = checkPage(pathname);
  const currentNav = NAV_INFO[`/${currentPage}`];

  // TODO: title currentLeaf => 데이터 fetching해서 가져오는 것으로 추후 변경.

  return (
    <S.NavContainer>
      <S.NavLeft>{currentNav.left}</S.NavLeft>
      <S.NavTitle>
        <Text as="h3" size={15}>
          {currentNav.title ? currentNav.title : currentLeaf}
        </Text>
      </S.NavTitle>
      <S.NavRight>{currentNav.right}</S.NavRight>
    </S.NavContainer>
  );
}

export default Navbar;
