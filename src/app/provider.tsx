
"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import PreloadProvider from "../core/PreloadProvider";
import { queryCacheOnError } from "@/error/errorState";
import { GlobalStyleProvider } from "@/core/GlobalStyleProvider";
import { theme } from "@/styles/theme";
import StyledComponentsRegistry from "@/common/lib/styled-components.-registry";

export default function Providers({ children }: { children: React.ReactNode }) {
  /** 리액트 쿼리 전역 세팅 */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 1000 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => queryCacheOnError(error, query),
    }),
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <body>
          <QueryClientProvider client={queryClient}>
            <PreloadProvider>
              <GlobalStyleProvider>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
              </GlobalStyleProvider>
            </PreloadProvider>
          </QueryClientProvider>
        </body>
      </ThemeProvider>
    </RecoilRoot>
  );
}
