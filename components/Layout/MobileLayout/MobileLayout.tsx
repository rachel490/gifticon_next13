"use client";

import * as S from "./MobileLayout.styled";

function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.ContentWrap>
      <S.Content>{children}</S.Content>;
    </S.ContentWrap>
  );
}

export default MobileLayout;
