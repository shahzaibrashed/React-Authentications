import AllProduct from "../Screens/AllProduct";
import ErrorRoutes from "../Screens/ErrorRoutes";
import SingIn from "../Screens/SingIn";
import SingUp from "../Screens/SingUp";

export const RouterList = [

    {
    path:"/",
    element:<SingUp/>
    },
    {
        path:"/sing-In",
        element:<SingIn/>
        },
    {
        path:"/allproduct",
        element:<AllProduct/>
    },

    {
        path:"*",
        element:<ErrorRoutes/>
    }
]