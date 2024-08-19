import styled, { css } from "styled-components";

import {
  SidemenuTop,
  SidemenuTopSpan,
} from "../../atoms/SidemenuTop/SidemenuTop.style";
import {
  SidemenuItemBox,
  SidemenuListItem,
  TitBox,
} from "../../atoms/SidemenuItem/SidemenuItem.style";
import { SidemenuListBox } from "@/components/molcules/SidemenuList/SidemenuList.style";

interface MainBoxProps {
  $asideOpen: boolean;
}

export const MainTemplate = styled.div<MainBoxProps>`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    "MN HD"
    "MN CT";
  grid-template-columns: ${({ $asideOpen }) =>
    $asideOpen ? "224px auto" : "58px auto"};
  grid-template-rows: 52px auto;
  transition: all 0.3s ease;

  // 사이드메뉴 OPEN/CLOSE
  ${({ $asideOpen }) =>
    $asideOpen === false &&
    css`
      ${SidemenuTop} {
        ${SidemenuTopSpan} {
          display: none;
        }
      }

      ${SidemenuListItem} {
        ${TitBox} {
          display: none;
        }

        & > svg {
          display: none;
        }
      }

      ${SidemenuItemBox} {
        & > ${SidemenuListBox} {
          max-height: 0px;
        }
      }
    `}

  // 화면크기(1400px 미만) 설정
  @media (max-width: 1399px) {
    grid-template-columns: ${({ $asideOpen }) =>
      $asideOpen ? "224px auto" : "0 auto"};

    // 사이드메뉴 OPEN/CLOSE
    ${({ $asideOpen }) =>
      $asideOpen === false &&
      css`
        ${SidemenuTop} {
          display: none;
        }
      `}
  }
`;

export const ContentSection = styled.section`
  overflow: hidden;
  grid-area: CT;
  height: calc(100vh - 52px);
  background: ${(props) => props.theme.colors.primary5};
`;
