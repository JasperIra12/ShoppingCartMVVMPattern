import { configureStore } from "@reduxjs/toolkit";

import ProductCartReducer from './productSlice'
export const store = configureStore(
    {
        reducer:{
            all_cart : ProductCartReducer,
        }
    }
)