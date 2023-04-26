import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "⭐️Gifti",
  description: "Gifticon Trade Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
