import NavRoutes from "./NavRoutes";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";


export const AuthRoutes=[
    {
        link:NavRoutes.Login,
        element:<Login/>
    },{
        link:NavRoutes.Signup,
        element:<Signup/>
    }
];