import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyleProvider } from "./core/GlobalStyleProvider";
import { Routes } from "./core/Routes";
import { theme } from "./styles/theme";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import ErrorBoundary from "./error/errorBoundary";
import { ToastContainer } from "react-toastify";
import { AuthGuard } from "./core/AuthGuard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log("version 1.0.1");
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* 전역 스타일 지정 프로바이더 */}
        <GlobalStyleProvider>
          <ErrorBoundary>
            {/* 토큰 검증 가드 ( 사용자 정보 조회 ) */}
            <AuthGuard>
              <ThemeProvider theme={theme}>
                <Routes />
                <ToastContainer autoClose={1000} />
              </ThemeProvider>
            </AuthGuard>
          </ErrorBoundary>
        </GlobalStyleProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
