import {configureStore} from '@reduxjs/toolkit';
import navSlice from './navSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import categorySlice from './categorySlice';

const store = configureStore({
    reducer: {
        app: navSlice,
        search: searchSlice,
        chat: chatSlice,
        category: categorySlice,
    }
});

export default store;