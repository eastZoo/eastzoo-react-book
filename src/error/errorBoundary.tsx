import React, { Component, ErrorInfo, ReactNode } from "react";
import { Fallback } from "./fallback";

interface Props {
  children: ReactNode;
  fallbackUI?: ReactNode;
}

interface State {
  hasError: boolean;
}

// UI 렌더링시 일부분에 존재하는 js에러가 전체 앱 중단하지 않도록 하기 위해
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // 에러 발생 후, 폴백 UI 렌더링하기 위해
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // 에러정보 기록
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallbackUI || <Fallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
