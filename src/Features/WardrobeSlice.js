import { createSlice } from "@reduxjs/toolkit";
import { FakeStoreApiInstance } from "../utils/AxiosInstance";

const WardrobeSlice = createSlice({
  name: "wardrobe",
  initialState: {
    products: [],
    categories: [],
    error: null,
    loading: false,
  },
  reducers: {
    request: (state) => {
      state.loading = true;
      state.error = null;
    },
    success: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state[action.payload.key] = action.payload.data;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { request, success, error } = WardrobeSlice.actions;

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await FakeStoreApiInstance.get("/products");
    dispatch(success({ key: "products", data }));
  } catch (err) {
    dispatch(error("Something gone Wrong"));
    console.log(err);
  }
};

export const fetchAllCategories = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await FakeStoreApiInstance.get("/products/categories");
    dispatch(success({ key: "categories", data }));
  } catch (err) {
    dispatch(error("Something gone Wrong"));
    // console.log(error);
  }
};

export const fetchProductbyCategory = (category) => async (dispatch) => {
  try {
    dispatch(request());

    const { data } = await FakeStoreApiInstance.get(
      `/products/category/${category}`
    );

    dispatch(success({ key: "products", data }));
  } catch (err) {
    dispatch(error("Something Went Wrong"));
    console.log(err);
  }
};

export const getWardrobeState = (state) => state.wardrobe;

export default WardrobeSlice.reducer;
