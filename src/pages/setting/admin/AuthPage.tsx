import { useState } from "react";
import { PageContent } from "../../../components/organisms/Contents/PageContent";

export const AuthPage = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalShow = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <PageContent
        depth01Title="관리자 설정"
        depth02Title="사용자 관리"
        depth03Title="권한 관리"
      >
        <div></div>
      </PageContent>
    </>
  );
};
