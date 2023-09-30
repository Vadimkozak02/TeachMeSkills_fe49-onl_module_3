import { createSlice } from "@reduxjs/toolkit";
import { mokieApi } from "../../mokie.api";
import { TypeOfMockie } from "../../mokie.api";

const ActiveBookmarkSlice = createSlice({
    name: 'isFavorive',
    initialState: {
        arr: [] as TypeOfMockie[],
        activeBookmark: false,
    },
    reducers: {
        toggleFavorites(state, action) {
            const favoritesCard  = action.payload;
            
            console.log('favoritesCard', favoritesCard);

            if (state.arr.some(r => r.id === favoritesCard)) {
                const index = state.arr.findIndex(item => item.id === favoritesCard);
                if (index !== -1) {
                    state.arr.splice(index, 1);
                }
            } else {
                mokieApi.filter(el => {
                if (el.id === favoritesCard) {
                        state.arr.push(el);
                        console.log('state', state);
                    }
                })
            }
        }
    }
});

export const {actions: {toggleFavorites}, reducer: ActiveBookmarkSliceReducer} = ActiveBookmarkSlice;