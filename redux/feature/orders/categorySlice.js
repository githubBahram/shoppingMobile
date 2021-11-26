import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    status: 'idle',
    error: null,
};
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
        try {
            console.log('fetch categories');
            const response = await fetch('https://shahrvand-shahrvand.apps.ir-thr-at1.arvan.run/categoryManager/categories/isRoot/companies/1');
            console.log('response');
            console.log(response);
            let json = await response.json();
            console.log('json');
            console.log(json);
            return json;
        } catch (error) {
            console.log(error);
        }

    },
);
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            console.log('action.payload');
            console.log(action.payload);

              state.push(action.payload);
            console.log('categories');
            console.log(state.categories);

        },
    },

});
export const selectAllCategories = (state) => state.categories;

export default categoriesSlice.reducer;
