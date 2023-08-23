import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BASE_API from "../../mock/api";
import axios from "axios";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const API = `${BASE_API}/api/auth`;

const initialState = {
  isLoading: false,
  user: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    gender: "",
    country: "",
    city: "",
    weight: null,
    height: null,
    image: "",
    role: "",
  },
  error: null,
  isLogin: false,
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
      localStorage.setItem("token", res.data.token);
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
      localStorage.removeItem("token");
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
        state.user.username = action.payload.username;
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        state.user.email = action.payload.email;
        state.user.birthday = dayjs(action.payload.birthday, "YYYY-MM-DD");
        state.user.gender = action.payload.gender;
        state.user.country = action.payload.country;
        state.user.city = action.payload.city;
        state.user.weight = action.payload.weight;
        state.user.height = action.payload.height;
        state.user.image = action.payload.image;
        state.user.role = action.payload.roles[0];
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
