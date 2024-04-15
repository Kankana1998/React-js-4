import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },

    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});


export const {toggleMenu} = navSlice.actions;
export default navSlice.reducer;