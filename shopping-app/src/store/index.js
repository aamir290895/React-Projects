import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    fi : searchReducer,
  },
});

export default store;
