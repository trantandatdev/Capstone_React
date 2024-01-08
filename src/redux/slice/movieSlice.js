import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";

export const getAllMovieThunk = createAsyncThunk(
  "movie/getAllMovieThunk",
  async (data, thunkAPI) => {
    console.log(data);
    // gọi dữ liệu từ sever để lấy danh sách phim
    const result = await quanLyPhimSer.getAllMovie();
    return result.data.content;
  }
);

const initialState = {
  listMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fulfilled là trạng thái của thunk khi lấy dữ liệu thành công
    builder.addCase(getAllMovieThunk.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      state.listMovie = action.payload;
    });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
