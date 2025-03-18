import { useRecoilState, useSetRecoilState } from "recoil";
import { memberState } from "../states/member";
import { logIdState } from "../states/loginLog";
import { request } from "../api";
import {
  ACCESS_TOKEN,
  RECOIL_PERSIST_KEY,
  REFRESH_TOKEN,
} from "../sharedStrings";

export const useLogout = () => {
  const setMember = useSetRecoilState(memberState);
  const [logId, setLogId] = useRecoilState(logIdState);

  const logout = () => {
    setMember(null);
    setLogId(null);
    request({ method: "POST", url: `/auth/logout/${logId}` }, false);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(RECOIL_PERSIST_KEY);
    window.location.href = "/";
  };

  return logout;
};
