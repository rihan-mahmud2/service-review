import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../Pages/Addservice/Addservice";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails/ServiceDetails";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Myrivews from "../Pages/Myrivews/Myrivews";
import Other from "../Pages/Others/Other";
import Register from "../Pages/Register/Register";
import Addrivews from "../Pages/Rivews/Addrivews";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:5000/allservices"),
      },
      {
        path: "/allServices/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allservices/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoutes>
            <Addservice></Addservice>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myrivews",
        element: (
          <PrivateRoutes>
            <Myrivews></Myrivews>
          </PrivateRoutes>
        ),
      },

      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/updaterivews/:id",
        element: <Other></Other>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updaterivews/${params.id}`),
      },
    ],
  },
]);
