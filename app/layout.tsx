import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyleProvider from "@/components/Providers/GlobalStyleProvider";
import ReactQueryProvider from "@/components/Providers/ReactQueryProvider";
import appleSDGothicNeo from "@/styles/font";

export const metadata = {
  title: "⭐️Gifti",
  description: "Gifticon Trade Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={appleSDGothicNeo.variable}>
      <body>
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <GlobalStyleProvider>{children}</GlobalStyleProvider>
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
