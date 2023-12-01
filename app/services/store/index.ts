import { create } from "zustand";

import type { PoolSlice } from "./pool";
import createPoolSlice from "./pool";
import type { AuthSlice } from "./auth";
import createAuthSlice from "./auth";

const useStore = create<PoolSlice & AuthSlice>()((...a) => ({
  ...createPoolSlice(...a),
  ...createAuthSlice(...a),
}));

export default useStore;
