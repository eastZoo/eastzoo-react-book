import * as S from "./Legends.style";

interface LegendsProps {
  title?: string;
  type: "led-monitor" | "led-equip" | "led-alarm" | "sailing-info" | "uptime";
  data?: any;
  children?: React.ReactElement;
}

export const Legend = ({ title, type, data, children }: LegendsProps) => {
  return (
    <S.LegendBox>
      {title && (
        <>
          <S.LegendTit>{title}</S.LegendTit>
          <S.TitBorder />
        </>
      )}
    </S.LegendBox>
  );
};
