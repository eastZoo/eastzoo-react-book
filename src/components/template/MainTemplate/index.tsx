interface MainTemplateProps {
  children: React.ReactElement;
}
// TODO: 헤더, 사이드메뉴 추가 메인 템플릿
// 헤더, 사이드메뉴 추가 후 주석 해제
export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div>
      <div>header</div>
      <div>sidemenu</div>
      {children}
    </div>
  );
};
