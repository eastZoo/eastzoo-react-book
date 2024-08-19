import * as S from "./Header.style";
import { useRef, useState } from "react";

import { ChangePasswordModal } from "../../containers/Member/ChangePasswordModal";

import IconMenu from "public/assets/svg/icon_sidemenu.svg";
import IconUser from "public/assets/svg/icon_user.svg";
import IconAlarm from "public/assets/svg/icon_alarm.svg";
import { useLogout } from "@/common/hooks/useLogout";
import { Legend } from "@/components/molcules/Legends";
import { Buttons } from "@/components/atoms/Buttons";
import { HeaderPopup } from "@/components/molcules/HeaderPopup";

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
  const [modalAlarmShow, setModalAlarmShow] = useState(false);

  const popupOutsideClick = (e: any) => {
    if (popupRef.current === e.target) {
      setPopupShow(false);
    }
  };

  return (
    <>
      <S.HeaderSection>
        <S.ShipModelTit>
          {asideOpen === true ? (
            ""
          ) : innerWidth < 1400 ? (
            <S.HeaderSidemenuBtn type="button" onClick={asideToggle}>
              <IconMenu />
            </S.HeaderSidemenuBtn>
          ) : (
            ""
          )}
          페이지 타이틀
        </S.ShipModelTit>
        <S.HeaderBtnBox>
          <Legend title="서브 타이틀" type="uptime">
            <>2023-01-30 00:10</>
          </Legend>
          <Buttons
            type="button"
            size="md"
            layout="icon"
            icon={<IconAlarm />}
            onClick={() => setModalAlarmShow(!modalAlarmShow)}
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
      {modalPasswordShow && (
        <ChangePasswordModal
          formId="change_pw"
          setModalShow={setModalPasswordShow}
        />
      )}
    </>
  );
};
