import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [],
};

export const getActivities = createAsyncThunk(
  "admin/getActivities",
  async(_, { rejectWithValue })
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
});
