import * as S from "./Modals.style";
import { useRef } from "react";
import IconComment from "public/assets/svg/icon_close.svg";

export interface ModalProps {
  modalTitle?: React.ReactElement | string;
  modalButtons?: React.ReactElement;
  children?: React.ReactElement;
  setModalShow?: any;
  formId?: string;
  statusNow?: any;
  statusTxt?: boolean;
  passwordAlert?: boolean;
  modalType?: "create" | "modify";
  modalCloseButton?: boolean;
}

export const Modals = ({
  modalType = "create",
  modalTitle,
  setModalShow,
  modalButtons,
  children,
  modalCloseButton,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutsideClick = (e: any) => {
    if (modalRef.current === e.target) {
      return setModalShow(false);
    }
  };

  return (
    <S.ModalBg ref={modalRef} onClick={(e: any) => modalOutsideClick(e)}>
      <S.Modal>
        <S.ModalTitBox>
          {modalTitle}
          {modalCloseButton && (
            <IconComment
              width={14}
              height={14}
              onClick={() => setModalShow(false)}
            />
          )}
        </S.ModalTitBox>

        <S.ModalContentBox>{children}</S.ModalContentBox>

        <S.ModalButtonBox>{modalButtons}</S.ModalButtonBox>
      </S.Modal>
    </S.ModalBg>
  );
};
