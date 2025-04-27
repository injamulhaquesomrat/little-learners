
import Root from "@/layouts/Root";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Homepage from "@/pages/Homepage";
import StudentLife from "@/pages/StudentLife";
import { createHashRouter } from "react-router";

const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/admissions",
        element: <Admissions />,
      },
      {
        path: "/student-life",
        element: <StudentLife />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default Router;
