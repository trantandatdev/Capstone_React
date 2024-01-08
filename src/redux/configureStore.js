import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import movieSlice from "./slice/movieSlice";
import loadingSlice from "./slice/loadingSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    loadingSlice,
  },
});
