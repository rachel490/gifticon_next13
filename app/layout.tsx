import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyleProvider from "@/components/Providers/GlobalStyleProvider";

export const metadata = {
  title: "⭐️Gifti",
  description: "Gifticon Trade Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyleProvider>{children}</GlobalStyleProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
