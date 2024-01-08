import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  count: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startedLoading: (state, action) => {
      state.isActive = true;
      state.count++;
    },
    endedLoading: (state, action) => {
      state.count--;
      if (state.count == 0) {
        state.isActive = false;
      }
    },
  },
});

export const { startedLoading, endedLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
