import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CommentPropertyType = {
  createdAt: string;
  id: number;
  text: string;
  userName: string;
};

type CommentType = {
  comments: CommentPropertyType[];
};

const initialState: CommentType = {
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
