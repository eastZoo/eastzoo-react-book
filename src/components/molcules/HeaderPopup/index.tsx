import IconLogout from "public/assets/svg/icon_logout.svg";
import IconPassword from "public/assets/svg/icon_password.svg";

import * as S from "./HeaderPopup.style";
import { HeaderPopupItem } from "@/components/atoms/HeaderPopupItem";

interface HeaderPopupProps {
  popupRef: React.ForwardedRef<HTMLDivElement>;
  popupOutsideClick: (e: any) => void;
  handleModal: (e: any) => void;
  logout: () => void;
}

export const HeaderPopup = ({
  popupRef,
  popupOutsideClick,
  handleModal,
  logout,
}: HeaderPopupProps) => {
  const popupItem = [
    {
      id: 1,
      title: "비밀번호 변경",
      icon: <IconPassword />,
      onClick: handleModal,
    },
    {
      id: 2,
      title: "로그아웃",
      icon: <IconLogout />,
      onClick: logout,
    },
  ];

  return (
    <S.HeaderPopupBg ref={popupRef} onClick={(e: any) => popupOutsideClick(e)}>
      <S.HeaderPopup>
        <S.HeaderPopupList>
          {popupItem.map((item: any) => {
            return (
              <HeaderPopupItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                onClick={item.onClick}
              />
            );
          })}
        </S.HeaderPopupList>
      </S.HeaderPopup>
    </S.HeaderPopupBg>
  );
};
