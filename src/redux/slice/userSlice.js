import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocalStore } from "../../utils/local";
import { userServ } from "../../services/userServ";

const initialState = {
  user: getLocalStore("user_info"),
};

export const getAllUserAPI = createAsyncThunk(
  "user/getAllUserAPI",
  async () => {
    const res = await userServ.getAllUser();
    return res.data.content;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveInfoUser } = userSlice.actions;

export default userSlice.reducer;
