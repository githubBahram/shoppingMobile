import {configureStore} from '@reduxjs/toolkit';
import ordersSlice from './feature/orders/ordersSlice';
import categorySlice from "./feature/orders/categorySlice";

export default configureStore({
    reducer: {
        orders: ordersSlice,
        categories:categorySlice
    },
});
