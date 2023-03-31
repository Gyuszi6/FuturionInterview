import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  currentPage: 0,
  totalPage: 0,
  currentBlogId: localStorage.getItem("currentBlogId")
    ? localStorage.getItem("currentBlogId")
    : 0,
  currentBlogTitle: localStorage.getItem("currentBlogTitle")
    ? localStorage.getItem("currentBlogTitle")
    : "",
  currentBlogText: localStorage.getItem("currentBlogText")
    ? localStorage.getItem("currentBlogText")
    : "",
  currentBlogImg: localStorage.getItem("currentBlogImg")
    ? localStorage.getItem("currentBlogImg")
    : "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    SET_BLOGS: (state, action: PayloadAction<[]>) => {
      state.blogs = action.payload;
    },
    SET_CURRENT_PAGE: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    SET_TOTAL_PAGE: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },
    SET_CURRENT_BLOG_ID: (state, action: PayloadAction<number>) => {
      state.currentBlogId = action.payload;
      localStorage.setItem("currentBlogId", action.payload.toString());
    },
    SET_CURRENT_BLOG_TITLE: (state, action: PayloadAction<string>) => {
      state.currentBlogTitle = action.payload;
      localStorage.setItem("currentBlogTitle", action.payload);
    },
    SET_CURRENT_BLOG_TEXT: (state, action: PayloadAction<string>) => {
      state.currentBlogText = action.payload;
      localStorage.setItem("currentBlogText", action.payload);
    },
    SET_CURRENT_BLOG_IMG: (state, action: PayloadAction<string>) => {
      state.currentBlogImg = action.payload;
      localStorage.setItem("currentBlogImg", action.payload);
    },
  },
});

export const {
  SET_BLOGS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGE,
  SET_CURRENT_BLOG_ID,
  SET_CURRENT_BLOG_IMG,
  SET_CURRENT_BLOG_TEXT,
  SET_CURRENT_BLOG_TITLE,
} = blogSlice.actions;

export default blogSlice.reducer;
