import { create } from "zustand";

import { ChartActions,ChartState, createChartSlice } from "./slice/chartSlice"; 
import { createUsersSlice, UsersAction, UsersState } from "./slice/usersSlice";

type StoreState = ChartState & UsersState
type StoreActions = ChartActions &UsersAction

export const useBoundStore = create<StoreState & StoreActions>((...a) => ({
    ...createChartSlice(...a),
    ...createUsersSlice(...a)

}));