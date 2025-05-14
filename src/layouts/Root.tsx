import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-background font-outfit text-text-muted">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
