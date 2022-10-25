import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user/getSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.newUser;
    },
  },
  extraReducers: {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
