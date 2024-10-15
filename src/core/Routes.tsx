import { Routes as DomReoutes, Route } from "react-router-dom";
import { readAccessToken } from "../common/functions/authFunctions";
import { MainRoutePage } from "../pages/MainRoutePage";
import { AuthPage } from "../pages/setting/admin/AuthPage";

import { AccountPage } from "../pages/setting/admin/AccountPage";
import { AccessLogPage } from "../pages/setting/admin/AccessLogPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/home/HomePage";
import { LoginPage } from "../pages/auth/LoginPage";

interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuthorization: boolean;
}

const routerItems: RouterItem[] = [
  /* 메인화면 */
  { path: "/auth/login", element: <LoginPage />, withAuthorization: false },
  { path: "/", element: <HomePage />, withAuthorization: true },

  /* 관리자 설정 */
  {
    path: "/setting/user/account",
    element: <AccountPage />,
    withAuthorization: true,
  },
  {
    path: "/setting/user/auth",
    element: <AuthPage />,
    withAuthorization: true,
  },
  {
    path: "/setting/user/access-log",
    element: <AccessLogPage />,
    withAuthorization: true,
  },
];

export function Routes() {
  const accessToken = readAccessToken();

  return (
    <DomReoutes>
      <Route element={<MainRoutePage />}>
        {routerItems
          .filter((route) => route.withAuthorization)
          .map((route: RouterItem) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute
                    component={route.element}
                    authenticated={accessToken}
                  />
                }
              />
            );
          })}
      </Route>

      {routerItems
        .filter((route) => !route.withAuthorization)
        .map((route: RouterItem) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
    </DomReoutes>
  );
}
