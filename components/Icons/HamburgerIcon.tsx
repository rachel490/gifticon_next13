import { BsList } from "react-icons/bs";

function HamburgerIcon() {
  const openSideModal = () => {
    console.log("open side modal");
  };

  return <BsList size={24} onClick={openSideModal} />;
}

export default HamburgerIcon;
