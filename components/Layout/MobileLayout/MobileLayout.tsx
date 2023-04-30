"use client";

import Navbar from "@/components/Navbar/Navbar";
import * as S from "./MobileLayout.styled";

function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.ContentWrap>
      <S.Content>
        <Navbar />
        {children}
      </S.Content>
      ;
    </S.ContentWrap>
  );
}

export default MobileLayout;
