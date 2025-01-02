import React from "react";
import styled from "styled-components";

// 에러 발생시 보여지는 기본 폴백 UI 컴포넌트
export const Fallback: React.FC = () => {
  return (
    <CenteredContainer>
      <Content>
        <ContentTitle>
          <ErrorText>{"에러가 발생했습니다."}</ErrorText>
        </ContentTitle>

        <a href="/">
          <StyledButton>메인화면으로 돌아가기</StyledButton>
        </a>
      </Content>
    </CenteredContainer>
  );
};

// Styled Components
const CenteredContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBg};
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  padding: 60px 40px 40px;
  background-color: white;
  box-shadow: ${(props) => props.theme.shadows.item};
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  svg {
    path:last-child {
      fill: ${(props) => props.theme.colors.primary70};
    }
  }
`;

const ErrorText = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.black80};
`;

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 48px;
  color: ${(props) => props.theme.colors.primary100};
  background: ${(props) => props.theme.colors.white100};
  border: none;
  border-radius: 6px;
  align-items: center;
  transition: background-color 0.3s ease;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary6};
  }
`;
