"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Fallback } from "./fallback";

interface Props {
  children: ReactNode; // ErrorBoundary로 감싸질 자식 컴포넌트들
  fallbackUI?: ReactNode; // 에러 발생시 보여줄 커스텀 UI (선택사항)
}

interface State {
  hasError: boolean; // 에러 발생 여부를 추적하는 상태
}

class ErrorBoundary extends Component<Props, State> {
  // 초기 상태 설정
  public state: State = {
    hasError: false,
  };

  // 자식 컴포넌트에서 에러가 발생했을 때 호출되는 정적 메서드
  // 반환값이 state로 병합됨
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // 에러와 관련된 정보를 로깅하기 위한 생명주기 메서드
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // hasError가 true이면 fallbackUI 또는 기본 Fallback 컴포넌트를 렌더링
  // 그렇지 않으면 정상적으로 자식 컴포넌트들을 렌더링
  public render() {
    if (this.state.hasError) {
      return this.props.fallbackUI || <Fallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
