import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const checkboxSlice = createSlice({
  name: "checkbox/getSlice",
  initialState,
  reducers: {
    handleSingleselect(state, { payload }) {
      const findId = state.list.find((id) => id === payload);
      if (findId) {
        state.list = state.list.filter((id) => id !== payload);
      } else {
        state.list.push(payload);
      }
    },
    handleMultipleSelect(state, { payload }) {
      if (JSON.stringify(state.list) === JSON.stringify(payload)) {
        state.list = [];
      } else {
        state.list = payload;
      }
    },
    clearSelection(state, { payload }) {
      state.list = [];
    },
  },
});

export const { handleSingleselect, handleMultipleSelect, clearSelection } =
  checkboxSlice.actions;

export default checkboxSlice.reducer;
