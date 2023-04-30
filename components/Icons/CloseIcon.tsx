import { BsXLg } from "react-icons/bs";

function CloseIcon() {
  const closeSideModal = () => {
    console.log("close side modal");
  };

  return <BsXLg size={24} onClick={closeSideModal} />;
}

export default CloseIcon;
