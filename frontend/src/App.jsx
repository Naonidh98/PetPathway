import React from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//importing pages
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
  Dashboard,
  Setting,
  Profile,
  Cart
} from "./pages/index";

//importing Navbar and Foooter
import { TopBar, Footer, BreedDetail } from "./components/index";

//layout function  : allow route when user is logged in
function Layout() {
  const { user, token } = useSelector((state) => state.user);
  if (user && token) {
    return <Outlet />;
  } else {
    return <Login />;
  }
}

function Layout2({ children }) {
  const { user, token } = useSelector((state) => state.user);
  if (user && token) {
    return children;
  } else {
    return <Login />;
  }
}


const App = () => {
  return (
    <div className="w-screen h-full overflow-x-hidden bg-richblack-900 text-white">
      <TopBar />
      <Routes>

        {/* routes accessed when user logged in */}
        <Route element={<Layout />}>
          <Route path="/groom" element={<Groom />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/otp/verify" element={<OTP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/breeds/:id" element={<BreedDetail />} />
        <Route path="/store" element={<Store />} />

        <Route path="/store/:id" element={<ItemsDetails />} />
        <Route path="/groom" element={<Groom />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/About" element={<About />} />
        <Route path="/store/:id" element={<ItemsDetails />} /> 

        {/* Dashboard routing */}
        <Route
          element={
            <Layout2>
              <Dashboard />
            </Layout2>
          }
        >
          <Route path="/dashboard/my-profile" element={<Profile />} />
          <Route path="/dashboard/setting" element={<Setting />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
