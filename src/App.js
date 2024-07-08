import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/create" element={<PostForm onSave={() => {}} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
