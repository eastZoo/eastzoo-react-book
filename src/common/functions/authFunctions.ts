"use client";

import {
  ACCESS_TOKEN,
  RECOIL_PERSIST_KEY,
  REFRESH_TOKEN,
} from "../sharedStrings";

export const writeAccessToken = (accessToken: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }
};

export const writeRefreshToken = (refreshToken: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
};

export const readAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(ACCESS_TOKEN);
  }
  return null;
};

export const readRefreshToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(REFRESH_TOKEN);
  }
  return null;
};

export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    const localStorageUser: string | null =
      localStorage.getItem(RECOIL_PERSIST_KEY);
    if (localStorageUser) {
      const storageJson = JSON.parse(localStorageUser);
      return storageJson["user"];
    }
  }
  return null;
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(RECOIL_PERSIST_KEY);
    window.location.href = "/";
  }
};

export const validateToken = async () => {
  // Token validation logic, possibly with API calls
};
