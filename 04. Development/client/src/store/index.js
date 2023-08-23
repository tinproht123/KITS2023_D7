import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import adminReducer from "./features/adminSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
  },
});

export default store;
