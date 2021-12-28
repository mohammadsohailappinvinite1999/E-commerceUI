import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/AuthSlice";
import CartSlice from "./Features/CartSlice";
import WardrobeSlice from "./Features/WardrobeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
    wardrobe: WardrobeSlice,
  },
});

export default store;
