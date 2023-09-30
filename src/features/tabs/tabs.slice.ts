import { createSlice } from "@reduxjs/toolkit";
import { mokieApi } from "../../mokie.api";


const TabsSlice = createSlice({
    name: 'TabsSlice',
    initialState: {
        activeTab: null as string | null,
    },
    reducers: {
        setActiveTab(state, action: {payload: string}) {
            state.activeTab = action.payload;
        }
    }
});

export const {
    actions: {setActiveTab}, 
    reducer: TabsSliceReducer, 
} = TabsSlice;