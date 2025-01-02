import { Outlet } from "react-router";
import { MainTemplate } from "../components/template/MainTemplate";

export const MainRoutePage = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
