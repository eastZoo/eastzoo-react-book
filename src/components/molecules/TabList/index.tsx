import * as S from "./TabList.style";
import { TabItem } from "../../atoms/TabItem";

interface TabListProps {
  data: any;
  selectedTab?: number;
  setSelectedTab?: any;
  onContextMenu: (event: React.MouseEvent, target: any) => void;
  onClose?: any;
}

export const TabList = ({
  data,
  selectedTab,
  setSelectedTab,
  onContextMenu,
  onClose,
}: TabListProps) => {
  return (
    <S.TabList>
      {data.map((item: any, idx: number) => {
        return (
          <TabItem
            onContextMenu={onContextMenu}
            key={idx}
            item={item}
            active={item.index === selectedTab ? true : false}
            onClick={() => setSelectedTab(item.index)}
            onClose={() => onClose(item.index)}
            isUseClose={false}
          />
        );
      })}
    </S.TabList>
  );
};
