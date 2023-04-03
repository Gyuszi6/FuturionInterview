import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  userState: string | null;
};

const initialState: UserType = {
  userState: localStorage.getItem("currentState")
    ? localStorage.getItem("currentState")
    : "public",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<string>) => {
      state.userState = action.payload;
      localStorage.setItem("currentState", action.payload);
    },
  },
});

export const { SET_USER } = userSlice.actions;

export default userSlice.reducer;
