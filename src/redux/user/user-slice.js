import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user/getSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
