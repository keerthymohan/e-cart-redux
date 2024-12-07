import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartslice from "./slices/cartslice";

const store = configureStore({
    reducer:{
        Wishlist : wishlistSlice,
        cartList : cartslice

    }
})
export default store