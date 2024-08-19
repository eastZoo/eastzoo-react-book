import { atom, selectorFamily } from "recoil";

export const permissionsState = atom<any[] | null>({
  key: `permission`,
  default: null,
});

export const permissionSelector = selectorFamily<any | undefined, string>({
  key: "permissionSelector",
  get:
    (pmsMenuName) =>
    ({ get }) => {
      const permissions = get(permissionsState);

      if (!permissions) {
        return undefined;
      }

      return permissions.find(
        (permission) => permission.pmsMenuName === pmsMenuName
      );
    },
});
