import styled, { css } from "styled-components";
import { SideTabList } from "../../molecules/SideTabList/SideTabList.style";

interface SideTabItemStyleProps {
  $depth?: number;
  $submenuToggle?: boolean;
  $menuActive?: boolean;
  $hoverUse?: boolean;
}

export const SideTabItemTit = styled.div<SideTabItemStyleProps>`
  display: flex;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.3rem;
  font-weight: 500;
  align-items: center;
  cursor: pointer;
  position: relative; /* 툴팁 위치 조정을 위한 설정 */

  svg {
    path {
      fill: ${(props) => props.theme.colors.black38};
    }
  }

  ${(props) =>
    props.$depth === 1 &&
    css`
      height: 48px;
      padding: 20px;
      background: ${(props) => props.theme.colors.white100};
      border-bottom: 1px solid ${(props) => props.theme.colors.black12};
      justify-content: space-between;
    `}

  ${(props) =>
    props.$depth === 2 &&
    css`
      height: 36px;
      padding: 0 32px;
    `}

  /* 툴팁 스타일 */
  ${(props) =>
    props.$submenuToggle === false && // submenu가 없을 때에만 툴팁 표시
    css`
      &::after {
        content: attr(
          data-title
        ); /* data-title 속성에서 툴팁 텍스트를 가져옵니다 */
        position: absolute;
        bottom: 120%; /* 아이템 상단에 툴팁 위치 */
        left: 60%;
        transform: translateX(-50%);
        background-color: ${(props) => props.theme.colors.black80};
        color: ${(props) => props.theme.colors.white100};
        padding: 5px 10px; /* 글자 길이에 맞춰 늘어나는 padding */
        border-radius: 4px;
        font-size: 1rem;
        white-space: nowrap; /* 한 줄로 표시하여 길이에 맞게 조절 */
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
      }

      &:hover::after {
        opacity: 1;
        visibility: visible;
      }
    `}

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const SideTabItem = styled.li<SideTabItemStyleProps>`
  ${(props) =>
    props.$submenuToggle === true &&
    css`
      & > ${SideTabItemTit} {
        font-weight: 600;
      }

      & > ${SideTabList} {
        max-height: auto;
        border-bottom: 1px solid ${(props) => props.theme.colors.black12};
        transition: max-height 0.4s ease-in-out;
      }
    `}

  ${(props) =>
    props.$submenuToggle === false &&
    css`
      & > ${SideTabList} {
        max-height: 0px;
        padding: 0;
        transition: max-height 0.2s ease-in-out;
      }
    `}

  ${(props) =>
    props.$depth === 2 &&
    props.$hoverUse !== false && // hoverUse가 false일 경우 hover 스타일 무시
    css`
      &:hover {
        background: ${(props) => props.theme.colors.primary5};

        ${SideTabItemTit} {
          color: ${(props) => props.theme.colors.primary100};
        }
      }
    `}
`;

// 기본값 설정
SideTabItem.defaultProps = {
  $hoverUse: true,
};
