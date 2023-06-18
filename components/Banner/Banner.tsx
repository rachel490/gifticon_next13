import Image from "next/image";
import * as S from "./Banner.styled";

function Banner() {
  return (
    <S.ImageContainer>
      <Image src="/assets/giftiBanner.jpg" alt="banner" fill />
    </S.ImageContainer>
  );
}

export default Banner;
