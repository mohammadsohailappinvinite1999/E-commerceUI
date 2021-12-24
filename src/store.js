import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/AuthSlice";
import CartSlice from "./Features/CartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
  },
});

export default store;
