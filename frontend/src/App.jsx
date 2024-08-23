import React from "react";
import {Route,Routes} from "react-router-dom"

//importing pages
import {Home} from "./pages/index"

const App = () => {

  return <div className="w-screen h-screen bg-black">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </div>

};

export default App;
