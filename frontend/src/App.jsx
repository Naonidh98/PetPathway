import React from "react";
import { Route, Routes } from "react-router-dom";

//importing pages
import {Home , Login ,Register,Contact , Breeds, PageNotFound} from "./pages/index"

//importing Navbar and Foooter
import {TopBar, Footer} from "./components/index"

const App = () => {

  return <div className="w-screen h-full overflow-x-hidden bg-richblack-900 text-white">
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/breeds" element={<Breeds />} />

      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
  </div>
};

export default App;
