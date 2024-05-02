"use client";
import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  height: 48px;
  padding: 4px;
  background: ${(props) => props.theme.colors.white};
  grid-template-columns: 50% 50%;

  .navbar {
    height: 44px;
    background: none;

    .navbar-bg {
      background: none;

      &::after {
        background: none;
      }
    }

    .navbar-inner {
      padding: 0 !important;

      .left {
        display: flex;
        margin: 0 !important;
        color: ${(props) => props.theme.colors.headerNavbar};
        font-size: 1.6rem;
        font-weight: 400;
        align-items: center;
        gap: 4px;

        div {
          padding-left: 12px;
        }
      }
    }
  }
`;

export const HeaderFunctionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderFunctionItems = styled.li`
  height: 40px;
`;
