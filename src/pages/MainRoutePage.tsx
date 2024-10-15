import { Outlet } from "react-router";
import { MainTemplate } from "../components/templates/MainTemplate";

export const MainRoutePage = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
