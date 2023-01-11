import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUserId = createAsyncThunk(
//   "member/get",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const oldData = getState().auth.user.id;

//       return oldData;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
export const getMembers = createAsyncThunk(
  "member/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/members");

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const MemberReducer = createSlice({
  name: "auth",
  initialState: {
    user: [],
    status: null,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [getMembers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMembers.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [getMembers.rejected]: (state, action) => {
      state.status = "failed";
      state.err = action.payload?.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const user = (state) => state.member.user;

// export const { getUserData, logout, updateRequesteduser, getSoketIo } =
//   AuthSlice.actions;
export default MemberReducer.reducer;
