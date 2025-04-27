import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
