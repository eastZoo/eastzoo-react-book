import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyleProvider } from "./core/GlobalStyleProvider";
import { Routes } from "./core/Routes";
import { theme } from "./styles/theme";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log("version 1.0.2");
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyleProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </GlobalStyleProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
