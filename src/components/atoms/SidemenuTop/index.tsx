import * as S from "./SidemenuTop.style";
import IconMenu from "public/assets/svg/icon_sidemenu.svg";

interface SidemenuTopProps {
  asideToggle?: any;
}

export const SidemenuTop = ({ asideToggle }: SidemenuTopProps) => {
  return (
    <S.SidemenuTop>
      <S.SidemenuBtn type="button" onClick={asideToggle}>
        <IconMenu />
      </S.SidemenuBtn>
      <S.SidemenuTopSpan>프로젝트 템플릿</S.SidemenuTopSpan>
    </S.SidemenuTop>
  );
};
