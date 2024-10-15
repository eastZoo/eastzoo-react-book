import * as S from "./Header.style";
import { useEffect, useRef, useState } from "react";
import { Buttons } from "../../atoms/Buttons";
import { HeaderPopup } from "../../molecules/HeaderPopup";
import { useLogout } from "../../../common/hooks/useLogout";
import { ReactComponent as IconMenu } from "../../../styles/assets/svg/icon_sidemenu.svg";
import { ReactComponent as IconUser } from "../../../styles/assets/svg/icon_user.svg";
import { ReactComponent as IconAlarm } from "../../../styles/assets/svg/icon_alarm.svg";
interface HeaderProps {
  asideToggle?: any;
  asideOpen?: boolean;
  innerWidth: number;
}

export const Header = ({ asideOpen, asideToggle, innerWidth }: HeaderProps) => {
  const logout = useLogout();
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupShow, setPopupShow] = useState(false);
  const [modalPasswordShow, setModalPasswordShow] = useState(false);

  // 페이지 새로고침 판별
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const popupOutsideClick = (e: any) => {
    if (popupRef.current === e.target) {
      setPopupShow(false);
    }
  };

  useEffect(() => {
    if (!isRefresh) {
      setIsRefresh(true);
    }
  }, [isRefresh]);

  return (
    <>
      <S.HeaderSection>
        <S.ShipModelTit>
          {asideOpen === true ? (
            "메인 타이틀"
          ) : innerWidth < 1400 ? (
            <S.HeaderSidemenuBtn type="button" onClick={asideToggle}>
              <IconMenu />
            </S.HeaderSidemenuBtn>
          ) : (
            "메인 타이틀"
          )}
        </S.ShipModelTit>
        <S.HeaderBtnBox>
          <Buttons
            type="button"
            size="md"
            layout="icon"
            icon={<IconAlarm />}
            onClick={() => {}}
          />
          <Buttons
            type="button"
            size="md"
            layout="icon"
            icon={<IconUser />}
            onClick={() => {
              setPopupShow(!popupShow);
            }}
          />
        </S.HeaderBtnBox>
      </S.HeaderSection>
      {popupShow && (
        <HeaderPopup
          logout={logout}
          popupRef={popupRef}
          popupOutsideClick={popupOutsideClick}
          handleModal={() => {
            setPopupShow(false);
            setModalPasswordShow(!modalPasswordShow);
          }}
        />
      )}
    </>
  );
};
