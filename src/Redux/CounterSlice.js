import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        navItem: 'home',
    },
    reducers: {
        updateNavItem: (state, action) => {
            state.navItem = action.payload
        },
    }
})

export const { updateNavItem } = counterSlice.actions;

export default counterSlice.reducer;