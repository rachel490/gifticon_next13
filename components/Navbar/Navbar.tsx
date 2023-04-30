import { usePathname } from "next/navigation";
import { BASE_ROUTES } from "@/constants/routes";
import { checkPage } from "@/utils/checkPage";
import { CloseIcon, HamburgerIcon, PrevIcon } from "../Icons";
import Text from "../Text/Text";
import * as S from "./Navbar.styled";

const nav = {
  [BASE_ROUTES.HOME]: {
    left: <HamburgerIcon />,
    title: "니콘내콘",
  },
  [BASE_ROUTES.CATEGORY]: {
    left: <PrevIcon />,
    title: "categoryName",
  },
  [BASE_ROUTES.BRAND]: {
    left: <PrevIcon />,
    title: "brandName",
  },
  [BASE_ROUTES.MENU]: {
    left: <PrevIcon />,
  },
  [BASE_ROUTES.FAQ]: {
    right: <CloseIcon />,
    title: "고객센터",
  },
};

function Navbar() {
  const pathname = usePathname();
  const [currentPage, currentLeaf] = checkPage(pathname);
  const currentNav = nav[`/${currentPage}`];

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
