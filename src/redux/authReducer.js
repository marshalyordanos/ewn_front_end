import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      console.log("'''''''''''''''999999'''''''''''''''''");

      const res = await axios.post("http://localhost:5000/auth/login", data);

      localStorage.setItem("user", JSON.stringify(res.data));
      console.log("'''''''''''''''999999'''''''''''''''''", res.data);

      return res.data;
    } catch (err) {
      console.log("'''''''''''''''999999'''''''''''''''''", err.response.data);

      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", data);
      localStorage.setItem("user", JSON.stringify(res.data));

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    status: null,
    err: null,
  },
  reducers: {
    local: (state, action) => {
      console.log(action.payload.user);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.err = action.payload?.message;
    },

    [register.pending]: (state, action) => {
      state.status = "loading";
    },
    [register.fulfilled]: (state, action) => {
      state.status = "success";
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
    },
    [register.rejected]: (state, action) => {
      state.status = "failed";
      state.err = action.payload?.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const user = (state) => state.auth.user;
export const token = (state) => state.auth.token;

// export const usersNotInGroup = (state) => state.auth.usersNotInGroup;
// export const requestedUser = (state) => state.auth.requestedUsers;

export const { local, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
