import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    SET_COMMENTS: (state, action: PayloadAction<[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { SET_COMMENTS } = commentSlice.actions;

export default commentSlice.reducer;
