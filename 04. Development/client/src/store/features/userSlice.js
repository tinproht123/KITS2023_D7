import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BASE_API from "../../mock/api";
import axios from "axios";

const initialState = {
  isLoading: false,
  workouts: [],
  error: null,
};

export const getWorkouts = createAsyncThunk(
  "user/getWorkouts",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_API}/api/workouts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createWorkout = createAsyncThunk(
  "user/createWorkout",
  async ({ workoutData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${BASE_API}/api/workouts`, workoutData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkouts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWorkouts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workouts = action.payload;
      })
      .addCase(getWorkouts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
