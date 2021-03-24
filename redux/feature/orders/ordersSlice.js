import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: null, title: '', amount: 0, count: 0},
];
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded(state, action) {
            const {id, count} = action.payload;
            const existOrder = state.find(order => order.id === id);

            if (existOrder) {
                existOrder.count = count + 1;
            } else {
                state.push(action.payload);
            }
        },
        orderRemoved(state, action) {
            const {id, count} = action.payload;

            const existOrderRemove = state.find(order => order.id === id);

            if (existOrderRemove) {
                if (count === 1) {
                    var index = state.indexOf(existOrderRemove);
                    if (index > -1) {
                        state.splice(index, 1);
                    }
                } else {
                    existOrderRemove.count = count - 1;
                }
            }
        },
    },
    prepare(id, title, amount, count) {
        return {
            payload: {
                id,
                title,
                amount,
                count,
            },
        };
    },
});
export const {orderAdded, orderRemoved} = ordersSlice.actions;
export default ordersSlice.reducer;
