import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ModalProps } from "../../molecules/Modals";
import { ModalUser } from "../../molecules/Modals/ModalUser";
import { BaseResponse } from "../../../common/types/baseRespones";
import { request } from "../../../common/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectOption } from "../../../common/types/selectOption";
import {
  GET_MEMBERS,
  GET_PERMISSION_SELECT_OPTIONS,
} from "../../../common/querykeys";
import { CreateMemberInputs } from "./MemberCreateModal";
import { Member } from "../../../common/types/member";
import { confirmDialog } from "../ConfirmDialog";
import { showAlert } from "../Alert";

interface MemberUpdateModalProps extends ModalProps {
  formId: string;
  setModalShow: any;
  member: Member;
}

export interface UpdateMemberInputs
  extends Omit<CreateMemberInputs, "mbrUserPwd"> {
  mbrUserPwd?: string;
}

const schema = yup
  .object({
    mbrUserId: yup.string().nullable().required("아이디를 입력해주세요"),
    mbrUserGroup: yup.string().nullable().required("권한을 선택해주세요"),
    mbrUserDepartment: yup.string().nullable().required("소속을 입력해주세요"),
    mbrUserRank: yup.string().nullable().required("계급을 입력해주세요"),
    mbrUserName: yup.string().nullable().required("성명을 입력해주세요"),
  })
  .required();

export const MemberUpdateModal = ({
  formId,
  setModalShow,
  member,
  modalType,
}: MemberUpdateModalProps) => {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm<UpdateMemberInputs>({
    defaultValues: member,
    resolver: yupResolver(schema),
  });

  const { data: permissionSelectOptions } = useQuery({
    queryKey: [GET_PERMISSION_SELECT_OPTIONS],
    queryFn: async () => {
      const response = await request<SelectOption[]>({
        method: "GET",
        url: "/permission/select/options",
      });

      return response;
    },
  });

  const { mutateAsync: createMember } = useMutation({
    mutationFn: (inputs: UpdateMemberInputs) => {
      return request<BaseResponse>({
        method: "PATCH",
        url: `/member/${member.mbrId}`,
        data: inputs,
      });
    },
    onSuccess: (res: BaseResponse) => {
      setModalShow(false);
      queryClient.invalidateQueries({ queryKey: [GET_MEMBERS] });
    },
  });

  const { mutateAsync: resetPassword } = useMutation({
    mutationFn: () => {
      return request<BaseResponse>({
        method: "POST",
        url: `/member/reset-password/${member.mbrId}`,
      });
    },
    onSuccess: (res: BaseResponse) => {
      showAlert(`비밀번호가 군번으로 초기화되었습니다.`);
    },
  });

  const handleResetPassword = async () => {
    const isConfirm = await confirmDialog({
      text: "비밀번호를 초기화하시겠습니까?",
    });

    if (isConfirm) {
      resetPassword();
    }
  };

  return (
    <ModalUser
      onSubmit={handleSubmit((inputs: UpdateMemberInputs) =>
        createMember(inputs)
      )}
      onResetPassword={handleResetPassword}
      modalType={modalType}
      userGroup={member.mbrUserGroup}
      formId={formId}
      setModalShow={setModalShow}
      control={control}
      permissionSelectOptions={permissionSelectOptions ?? []}
    />
  );
};
