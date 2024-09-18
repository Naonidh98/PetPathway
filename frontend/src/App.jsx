import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  Login,
  Register,
  Contact,
  Breeds,
  PageNotFound,
  Store,
  ItemsDetails,
  Groom,
  ForgotPassword,
  ResetPassword,
  OTP,
  About,
  Blog,
} from "./pages";

//importing Navbar and Foooter
import { TopBar, Footer, BreedDetail } from "./components";

const App = () => {
  return (
    <div className="w-screen h-full overflow-x-hidden bg-richblack-900 text-white">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/breeds/:id" element={<BreedDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ItemsDetails />} />
        <Route path="/groom" element={<Groom />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
