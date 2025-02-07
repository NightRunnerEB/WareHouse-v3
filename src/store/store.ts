import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
