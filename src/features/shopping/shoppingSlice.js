import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: '',
};

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log('Before addItem:', state);
            state.items.push(action.payload);
            console.log('After addItem:', state);
        },
        removeItem: (state, action) => {
            console.log('Before removeItem:', state);
            state.items = state.items.filter(item => item !== action.payload);
            console.log('After removeItem:', state);
        },
        setFilter: (state, action) => {
            console.log('Before setFilter:', state);
            state.filter = action.payload;
            console.log('After setFilter:', state);
        },
    },
});

export const { addItem, removeItem, setFilter } = shoppingSlice.actions;

export default shoppingSlice.reducer;
