import styled, { css } from "styled-components";

interface LegendProps {
  $type: "led-monitor" | "led-equip" | "led-alarm" | "sailing-info" | "uptime";
}

export const LegendBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LegendTit = styled.div`
  color: ${(props) => props.theme.colors.black60};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TitBorder = styled.div`
  width: 1px;
  height: 12px;
  background: ${(props) => props.theme.colors.black10};
`;

export const LegendList = styled.ul<LegendProps>`
  display: flex;
  color: ${(props) => props.theme.colors.black60};
  font-size: 1.2rem;
  font-weight: 500;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.$type === "sailing-info" &&
    css`
      li + li {
        &::before {
          content: "";
          display: block;
          margin-right: 4px;
          width: 1px;
          height: 12px;
          background: ${(props) => props.theme.colors.black10};
        }
      }
    `}
`;
