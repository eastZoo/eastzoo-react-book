import { atom, selector } from "recoil";
import { v1 } from "uuid";
// TODO: 유저 타입 정의 필요
export const userInfoState = atom<any | null>({
  key: `userInfoState/${v1()}`,
  default: null,
});

export const userInfoSelector = selector({
  key: `userInfoSelector/${v1()}`,
  get: ({ get }) => {
    return get(userInfoState);
  },
  set: ({ set }, userInfo) => {
    set(userInfoState, userInfo);
  },
});
