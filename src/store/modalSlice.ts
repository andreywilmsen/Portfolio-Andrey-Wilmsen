import { createSlice } from "@reduxjs/toolkit";

interface modalState {
    isOpen: boolean;
}

const initialState: modalState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;