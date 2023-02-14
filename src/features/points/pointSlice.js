import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pointService from "./pointService";
import { extractErrorMessage } from "../../utils";

//Creating initial state cases
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

//add a restaurant

export const addRest = createAsyncThunk(
  "point/addRest",
  async (
    { name, latitude, longitude, city, region, cuisine, url, stars },
    thunkAPI
  ) => {
    try {
      return await pointService.addRest({
        name,
        latitude,
        longitude,
        city,
        region,
        cuisine,
        url,
        stars,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const pointSlice = createSlice({
  name: "point",
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
      .addCase(addRest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRest.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addRest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = pointSlice.actions;
export default pointSlice.reducer;
