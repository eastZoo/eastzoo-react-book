"use client";

import { RecoilRoot } from "recoil";
import StyledComponentsRegistry from "@/lib/styled-components.-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/globals-style";
import Head from "./head";
import AuthGuard from "./AuthGuard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /** 리액트 쿼리 전역 세팅 */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 1000 * 10,
      },
    },
  });

  return (
    <html lang="ko">
      <Head />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <body>
            <AuthGuard>
              <QueryClientProvider client={queryClient}>
                <StyledComponentsRegistry>
                  <>
                    <GlobalStyle />
                    {children}
                  </>
                </StyledComponentsRegistry>
              </QueryClientProvider>
            </AuthGuard>
          </body>
        </ThemeProvider>
      </RecoilRoot>
    </html>
  );
}
