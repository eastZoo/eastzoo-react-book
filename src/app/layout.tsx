// app/layout.tsx
import { MainTemplate } from "@/components/templates/MainTemplate";
import Providers from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <MainTemplate>{children}</MainTemplate>
        </Providers>
      </body>
    </html>
  );
}
