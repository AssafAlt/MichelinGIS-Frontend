import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { extractErrorMessage } from "../../utils";

// Get user from local storage
const user = localStorage.getItem("user");

//Creating initial state cases
const initialState = {
  userDetails: user ? user.user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

//register user

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, password }, thunkAPI) => {
    try {
      return await authService.registerUser({ username, password });
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
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
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => void (state.user = null));
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
