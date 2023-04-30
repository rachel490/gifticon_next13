import StyledComponentsRegistry from "@/lib/registry";
import {
  GlobalStyleProvider,
  ReactQueryProvider,
  ReduxToolkitProvider,
} from "@/components/Providers";
import MobileLayout from "@/components/Layout/MobileLayout/MobileLayout";
import appleSDGothicNeo from "@/styles/font";

export const metadata = {
  title: "⭐️Gifti",
  description: "Gifticon Trade Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={appleSDGothicNeo.variable}>
      <body>
        <ReduxToolkitProvider>
          <StyledComponentsRegistry>
            <ReactQueryProvider>
              <GlobalStyleProvider>
                <MobileLayout>{children}</MobileLayout>
              </GlobalStyleProvider>
            </ReactQueryProvider>
          </StyledComponentsRegistry>
        </ReduxToolkitProvider>
      </body>
    </html>
  );
}
