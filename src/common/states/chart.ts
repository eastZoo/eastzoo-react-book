import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RECOIL_PERSIST_KEY } from "../sharedStrings";

export interface ChartTab {
  index: number;
  name: string;
  trendId?: number;
}

const { persistAtom } = recoilPersist({
  key: RECOIL_PERSIST_KEY,
});

export const chartTabseState = atom<ChartTab[]>({
  key: `chartTabState`,
  default: [
    {
      index: 1,
      name: `차트1`,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const chartSelectedTabIndexSate = atom<number>({
  key: `chartSelectedTabIndexSate`,
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
