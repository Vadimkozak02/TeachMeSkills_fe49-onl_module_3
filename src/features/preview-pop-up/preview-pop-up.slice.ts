import { createSlice } from "@reduxjs/toolkit";

const previewPopUpSlice = createSlice({
    name: 'previewPopUp',
    initialState: {
        image: '',
        isModalOpen: false,
    },
    reducers: {
        setPreviewImg(state, action: {payload: typeof state['image']}) {
            state.image = action.payload;
        },
        setIsModalOpen(state, action: {payload: typeof state['isModalOpen']}) {
            state.isModalOpen = action.payload;
        }
    },
});

export const {
    actions: {setPreviewImg, setIsModalOpen}, 
    reducer: previewPopUpReducer,
} = previewPopUpSlice;