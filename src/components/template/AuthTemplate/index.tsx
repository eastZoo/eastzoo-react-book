import * as S from "./AuthTemplate.style";
interface AuthTemplateProps {
  children: React.ReactElement;
}

export const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <S.AuthTemplate>
      <S.AuthTitleSection>
        <S.AuthTitleBg />
        <S.AuthTitleBox>REACT TEMPLATE</S.AuthTitleBox>
      </S.AuthTitleSection>

      <S.AuthInputSection>
        {children}
        <S.AuthLogoBox></S.AuthLogoBox>
      </S.AuthInputSection>
    </S.AuthTemplate>
  );
};
