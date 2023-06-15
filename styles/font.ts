import localFont from "next/font/local";

const appleSDGothicNeo = localFont({
  src: [
    {
      path: "../public/fonts/AppleSDGothicNeoR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AppleSDGothicNeoM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/AppleSDGothicNeoSB.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default appleSDGothicNeo;
