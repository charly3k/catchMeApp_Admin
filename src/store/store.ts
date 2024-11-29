import { create } from "zustand";

import { ChartActions,ChartState, createChartSlice } from "./slice/chartSlice"; 

type StoreState = ChartState 
type StoreActions = ChartActions

export const useBoundStore = create<StoreState & StoreActions>((...a) => ({
    ...createChartSlice(...a)

}));