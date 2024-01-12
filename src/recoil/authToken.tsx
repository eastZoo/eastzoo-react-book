import { atom, selector } from "recoil";
import { v1 } from "uuid";

export const accessTokenState = atom({
  key: `accessToken/${v1()}`,
  default: null,
});

export const accessTokenSelector = selector({
  key: `accessTokenSelector/${v1()}`,
  get: ({ get }) => {
    return get(accessTokenState);
  },
  set: ({ set }, accessToken) => {
    console.log("set", accessToken);
    set(accessTokenState, accessToken);
  },
});
