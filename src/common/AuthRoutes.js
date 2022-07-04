import NavRoutes from "./NavRoutes";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";
import CodeVerify from "../Auth/CodeVerify";


export const AuthRoutes=[
    {
        link:NavRoutes.Login,
        element:<Login/>
    },{
        link:NavRoutes.Signup,
        element:<Signup/>
    }, {
        link: NavRoutes.forgetPassword,
        element:<ForgetPassword/>
    }, {
        link: NavRoutes.codeVerification,
        element:<CodeVerify/>
    }
];