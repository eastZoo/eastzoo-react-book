import { useState } from "react";
import * as S from "./UserAuthContent.style";
import { SideTabList } from "@/components/molecules/SideTabList";
import { ContentGridItem } from "@/components/atoms/ContentGridItem";

interface UserAuthProps {
  tabList?: any;
  activeValue?: any;
  contentTitle?: React.ReactElement;
  children?: React.ReactElement;
}

export const UserAuthContent = ({
  tabList,
  activeValue,
  contentTitle,
  children,
}: UserAuthProps) => {
  // openTabId 상태 선언
  const [openTabId, setOpenTabId] = useState<string | null>(null);

  return (
    <S.UserAuthContent>
      <ContentGridItem
        title={<>사용자 그룹</>}
        tabList={
          <SideTabList
            tabList={tabList}
            activeValue={activeValue}
            openTabId={openTabId} // 추가된 openTabId 전달
            setOpenTabId={setOpenTabId} // 추가된 setOpenTabId 전달
          />
        }
        underline={true}
      />

      <ContentGridItem title={contentTitle}>{children}</ContentGridItem>
    </S.UserAuthContent>
  );
};
