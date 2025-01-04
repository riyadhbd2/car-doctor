import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserBookings from "../pages/UserBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "book/:id",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/services/${params.id}`),
      },
      {
        path: "/userbookings",
        element: (
          <PrivateRoute>
            <UserBookings></UserBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
