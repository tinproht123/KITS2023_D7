import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BASE_API from "../../mock/api";
import axios from "axios";
import { toast } from "react-toastify";

const API = `${BASE_API}/api/auth`;

const initialState = {
  isLoading: false,
  user: {},
  error: null,
  isLogin: false,
  token: "",
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ userData }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/signup`, userData);
      toast.success("Sign Up Successfully!");
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data.message));
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ loginData }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/signin`, loginData);
      toast.success("Log In Successfully!");
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLogin = false;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLogin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
