import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import RegisterdHome from "../pages/RegisterdHome/RegisterdHome";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegisterdHome />,
  },
]);

export default route;
