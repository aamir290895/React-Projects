import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'fi',
  initialState: { data: "" },
  reducers: {
    searchAction: (state, action) => {
        state.data = action.payload;
        console.log("inside reducer:" , state.data)
    },
  },
});


export const {searchAction} = searchSlice.actions;
export default searchSlice.reducer;