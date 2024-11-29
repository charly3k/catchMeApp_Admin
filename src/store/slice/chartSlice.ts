import { StateCreator } from "zustand";

export type ChartState = {
    chartData: any;
    totalUsersThreeMonths: number;
    totalUsersSixMonths: number;
    totalUsersOneYear: number;
    totalUsers: {
        totalLast3Months: number;
        totalLast6Months: number;
        totalLast1Year: number;
    }

    };

  export  type ChartActions = {

            setChartData: (data: any) => void;
            setTotalUsersThreeMonths: (data: number) => void;
            setTotalUsersSixMonths: (data: number) => void;
            setTotalUsersOneYear: (data: number) => void;
            setTotalUsers: (totalUsers: {
                 totalLast3Months: number;
        totalLast6Months: number;
        totalLast1Year: number;

            }) => void;
    }

    const initialState: ChartState = {
        chartData: {
            labels: [],
            datasets: [
                {
                    label: "",
                    data: [],
                    backgroundColor: [],
                    borderColor: "",
                    borderWidth: 0,
                },
            ],
        },
        totalUsersThreeMonths: 0,
        totalUsersSixMonths: 0,
        totalUsersOneYear: 0,
        totalUsers: {
            totalLast3Months: 0,
            totalLast6Months: 0,
            totalLast1Year: 0,}                               
    };



export const createChartSlice: StateCreator<ChartState & ChartActions> = (set) => ({
    ...initialState,
    setChartData: (data) => {
        set((state) => ({
            chartData: data,
        }));
    },
    setTotalUsersThreeMonths: (data) => {
        set((state) => ({
            totalUsersThreeMonths: data,
        }));
    },
    setTotalUsersSixMonths: (data) => {
        set((state) => ({
            totalUsersSixMonths: data,
        }));
    },
    setTotalUsersOneYear: (data) => {
        set((state) => ({
            totalUsersOneYear: data,
        }));
    },
    setTotalUsers: (data) => {
        set((state) => ({
            totalUsers: data,
        }));
    },
    
});

    