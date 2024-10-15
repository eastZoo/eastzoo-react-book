import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RECOIL_PERSIST_KEY } from "../sharedStrings";

const { persistAtom } = recoilPersist({
  key: RECOIL_PERSIST_KEY,
});

export interface CurrentShip {
  shipTypeId?: number;
  shipTypeNo?: string;
  shipTypeName?: string;
  shipId?: number;
  shipNo?: string;
  shipName?: string;
}

export const selectedShipTypesState = atom<number[]>({
  key: `selectedShipTypesState`,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const currentShipState = atom<CurrentShip>({
  key: "selectedShipState",
  default: {
    shipTypeId: undefined,
    shipTypeNo: undefined,
    shipTypeName: undefined,
    shipId: undefined,
    shipNo: undefined,
    shipName: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});
