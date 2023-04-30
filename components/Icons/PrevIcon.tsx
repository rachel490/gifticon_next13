import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

function PrevIcon() {
  const router = useRouter();

  const navigateBack = () => {
    console.log("이전 페이지로 이동");
    router.back();
  };

  return <BsChevronLeft size={24} onClick={navigateBack} />;
}

export default PrevIcon;
