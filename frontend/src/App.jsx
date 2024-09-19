import React from "react";
import { Route, Routes } from "react-router-dom";

//importing pages
import {Home , Login ,Register,Contact , Breeds, PageNotFound,Store,Groom,ForgotPassword,ResetPassword,OTP,About,Cart} from "./pages/index"

//importing Navbar and Foooter
import {TopBar, Footer, BreedDetail} from "./components/index"

const App = () => {

  return <div className="w-screen h-full overflow-x-hidden bg-richblack-900 text-white">
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password/:token" element={<ResetPassword/>}/>
      <Route path="/otp/verify" element={<OTP/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/breeds" element={<Breeds />} />
      <Route path="/breeds/:id" element={<BreedDetail />} />
      <Route path="/store" element={<Store />} />
      <Route path="/groom" element={<Groom />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />

      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
  </div>
};

export default App;
