import { Outlet } from "react-router-dom";
// import Controlled from "../components/Controlled.jsx"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppLayout = () => {
  return (
    <>
      {/* <Controlled /> */}
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
