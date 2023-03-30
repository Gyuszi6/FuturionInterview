import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicPage from "./components/publicPage/PublicPage";
import AdminPage from "./components/adminPage/AdminPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="*" element={<PublicPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
