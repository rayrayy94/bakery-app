import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        navItem: 'home',
        orderId: ''
    },
    reducers: {
        updateNavItem: (state, action) => {
            state.navItem = action.payload
        },
        updateOrderId: (state, action) => {
            state.orderId = action.payload
        },
    }
})

export const { updateNavItem, updateOrderId } = counterSlice.actions;

export default counterSlice.reducer;