import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import MainLayout from "./MainLayout";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Statistics from "./Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
      {
        path: "/stats",
        element: <PrivateRoutes><Statistics></Statistics></PrivateRoutes>,
      },
    ],
  },
]);
export default router;
