import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicPage from "./components/publicPage/PublicPage";
import BlogDisplayPage from "./components/blogDisplayPage/BlogDisplayPage";
import CreateBlogPage from "./components/createBlogPage/CreateBlogPage";
import ModifyBlogpage from "./components/modifyBlogPage/ModifyBlogPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="*" element={<PublicPage />} />
          <Route path="/blog" element={<BlogDisplayPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
          <Route path="/modify" element={<ModifyBlogpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
