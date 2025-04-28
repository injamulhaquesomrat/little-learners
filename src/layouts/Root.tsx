import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-background font-outfit">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
