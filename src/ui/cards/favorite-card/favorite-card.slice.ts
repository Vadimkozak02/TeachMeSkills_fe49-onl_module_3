import { createSlice } from "@reduxjs/toolkit";
import { mokieApi } from "../../../mokie.api";

const FavoriteCardsSlice = createSlice({
    name: 'favoriteCards',
    initialState: {
        allFavCards: mokieApi.filter((el) => el.isFavorite === true)
    },
    reducers: {
        setFavCards(state, action: {payload: typeof state['allFavCards']}) {
            state.allFavCards = action.payload;
        }
    }
});

export const {actions: {setFavCards}, reducer: FavoriteCardsReducer} = FavoriteCardsSlice;