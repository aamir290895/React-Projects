import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addToCart : (state, actions)=>{
       state.data.push(actions.payload);
    }
  },
});


export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;
