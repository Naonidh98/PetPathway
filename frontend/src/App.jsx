import React from "react";
import { Route, Routes } from "react-router-dom";

//importing pages
import { Breeds, Home, Login, Register } from "./pages/index";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
    </div>
  );
};

export default App;
