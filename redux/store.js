import {configureStore} from '@reduxjs/toolkit';
import ordersSlice from './feature/orders/ordersSlice';

export default configureStore({
    reducer: {
        orders: ordersSlice,
    },
});
