import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    itemcount: 0,
};

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers: {
        increment: (state) => {
            state.itemcount++;
        },
        decrement: (state) => {
            if(state.itemcount > 0)
            {
                state.itemcount--;
        }
    
        },
    },
});

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
