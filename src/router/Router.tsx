import App from "@/App";
import { createHashRouter } from "react-router";

const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);
export default Router;
