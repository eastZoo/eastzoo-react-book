import * as S from "./SidemenuTop.style";
import { ReactComponent as IconMenu } from "../../../styles/assets/svg/icon_sidemenu.svg";
import { Link } from "react-router-dom";

interface SidemenuTopProps {
  asideToggle?: any;
}

export const SidemenuTop = ({ asideToggle }: SidemenuTopProps) => {
  return (
    <S.SidemenuTop>
      <S.SidemenuBtn type="button" onClick={asideToggle}>
        <IconMenu />
      </S.SidemenuBtn>
      <S.SidemenuTopSpan>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          INSYSTEM
        </Link>
      </S.SidemenuTopSpan>
    </S.SidemenuTop>
  );
};
