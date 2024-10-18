import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
