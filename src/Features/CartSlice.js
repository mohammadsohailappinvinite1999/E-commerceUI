import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addtoCart: (state, action) => {
      if (state.cart.length) {
        if (
          state.cart.filter((el) => {
            return el.id === action.payload.id;
          }).length
        ) {
          return;
        } else {
          state.cart.push(action.payload);
        }
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    editQuantity: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removefromCart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addtoCart, editQuantity, removefromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartState = (state) => state.cart;
