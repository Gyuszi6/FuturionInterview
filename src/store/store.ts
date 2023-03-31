import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./states/blogSlice";
import userReducer from "./states/userSlice";
import commentReducer from "./states/commentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
    comment: commentReducer,
  },
});
