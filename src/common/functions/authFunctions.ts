import { ACCESS_TOKEN, RECOIL_PERSIST_KEY } from "../sharedStrings";

export const writeAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const readAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const getUserInfo = () => {
  const localStorageUser: string | null =
    localStorage.getItem(RECOIL_PERSIST_KEY);
  if (localStorageUser) {
    const storageJson = JSON.parse(localStorageUser);
    return storageJson["user"];
  }

  return null;
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(RECOIL_PERSIST_KEY);

  window.location.href = "/";
};
