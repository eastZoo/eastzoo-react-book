import { FormEventHandler } from "react";
import { Control } from "react-hook-form";
import { ModalProps, Modals } from "..";
import { Buttons } from "../../../atoms/Buttons";
import { ControlText } from "../../../atoms/Controls/ControlText";
import { ChangePasswordInputs } from "../../../containers/Member/ChangePasswordModal";

interface ModalPasswordProps extends ModalProps {
  onSubmit: FormEventHandler;
  control: Control<ChangePasswordInputs>;
}

export const ModalPassword = ({
  formId,
  setModalShow,
  control,
  onSubmit,
}: ModalPasswordProps) => {
  return (
    <Modals
      modalTitle="비밀번호 변경"
      setModalShow={setModalShow}
      modalButtons={
        <>
          <Buttons
            type="submit"
            size="md"
            layout="primary"
            label="확인"
            form={formId}
          />
          <Buttons
            type="button"
            size="md"
            layout="secondary"
            label="취소"
            onClick={() => setModalShow(false)}
          />
        </>
      }
    >
      <form id={formId} onSubmit={onSubmit}>
        <ControlText
          type="password"
          control={control}
          size="md"
          width={400}
          direction="column"
          label="기존 비밀번호"
          placeholder="기존 비밀번호를 입력해주세요."
          name="currentPassword"
        />
        <ControlText
          type="password"
          control={control}
          direction="column"
          size="md"
          width={400}
          label="새 비밀번호"
          placeholder="새로 사용할 비밀번호를 입력해주세요."
          explain="비밀번호는 숫자, 영문, 특수기호를 조합해서 9글자 이상으로 입력해주세요."
          name="newPassword"
        />
        <ControlText
          type="password"
          control={control}
          direction="column"
          size="md"
          width={400}
          label="새 비밀번호 확인"
          placeholder="새로 사용할 비밀번호를 한번 더 입력해주세요."
          name="newPasswordCheck"
        />
      </form>
    </Modals>
  );
};
