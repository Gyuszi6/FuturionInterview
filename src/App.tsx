import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicPage from "./components/publicPage/PublicPage";
import BlogDisplayPage from "./components/blogDisplayPage/BlogDisplayPage";
import CreateBlogPage from "./components/createBlogPage/CreateBlogPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="*" element={<PublicPage />} />
          <Route path="/blog" element={<BlogDisplayPage />} />
          <Route path="/post" element={<CreateBlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
