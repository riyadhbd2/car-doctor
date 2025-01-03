import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Booking from "../pages/Booking";
import UserBookings from "../pages/UserBookings";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: 'book/:id',
                element: <Booking></Booking>,
                loader: ({params})=> fetch(`http://localhost:5002/services/${params.id}`)
            },
            {
                path: '/userbookings',
                element: <UserBookings></UserBookings>
            }

        ]
    }
])


export default router;