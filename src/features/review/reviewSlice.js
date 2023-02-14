import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reviewService from "./reviewService";
import { extractErrorMessage } from "../../utils";

//Creating initial state cases
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

//add a review

export const addReview = createAsyncThunk(
  "review/addreview",
  async ({ reviewerName, review, restId }, thunkAPI) => {
    try {
      return await reviewService.addReview({ reviewerName, review, restId });
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });
  },
});

export const { reset } = reviewSlice.actions;
export default reviewSlice.reducer;
