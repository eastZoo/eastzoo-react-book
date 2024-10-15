import { ContentTabItem } from "../../atoms/ContentTabItem";
import * as S from "./ContentTabList.style";

interface ContentTabProps {
  data?: any;
  selectedTab?: number;
  setSelectedTab?: any;
}

export const ContentTabList = ({
  data,
  selectedTab,
  setSelectedTab,
}: ContentTabProps) => {
  return (
    <S.ContentTabList>
      {data.map((item: any, idx: number) => {
        return (
          <ContentTabItem
            key={idx}
            title={item.name}
            active={item.index === selectedTab ? true : false}
            onClick={() => setSelectedTab(item.index)}
          />
        );
      })}
    </S.ContentTabList>
  );
};
