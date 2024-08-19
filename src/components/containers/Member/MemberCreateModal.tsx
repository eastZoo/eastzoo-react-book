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

interface MemberCreateModalProps extends ModalProps {
  formId: string;
  setModalShow: any;
}

export interface CreateMemberInputs {
  mbrUserId: string;
  mbrUserGroup: string;
  mbrUserPwd: string;
  mbrUserDepartment: string;
  mbrUserRank: string;
  mbrUserName: string;
  mbrUserTell?: string;
}

const schema = yup
  .object({
    mbrUserId: yup.string().nullable().required("아이디를 입력해주세요"),
    mbrUserPwd: yup.string().nullable().required("비밀번호를 입력해주세요"),
    mbrUserGroup: yup.string().nullable().required("권한을 선택해주세요"),
    mbrUserDepartment: yup.string().nullable().required("소속을 입력해주세요"),
    mbrUserRank: yup.string().nullable().required("계급을 입력해주세요"),
    mbrUserName: yup.string().nullable().required("성명을 입력해주세요"),
  })
  .required();

export const MemberCreateModal = ({
  modalType,
  formId,
  setModalShow,
}: MemberCreateModalProps) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm<CreateMemberInputs>({
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
    mutationFn: (inputs: CreateMemberInputs) => {
      return request<BaseResponse>({
        method: "POST",
        url: "/member",
        data: inputs,
      });
    },
    onSuccess: (res: BaseResponse) => {
      setModalShow(false);
      queryClient.invalidateQueries({ queryKey: [GET_MEMBERS] });
    },
  });

  return (
    <ModalUser
      onSubmit={handleSubmit((inputs: CreateMemberInputs) =>
        createMember(inputs)
      )}
      modalType={modalType}
      formId={formId}
      setModalShow={setModalShow}
      control={control}
      permissionSelectOptions={permissionSelectOptions ?? []}
    />
  );
};
