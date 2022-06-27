import { useContext } from "react";
import {UserContext} from '../Context'

const  useToken=()=>{

    const { token, setToken } = useContext(UserContext);

    const Login=(t)=>{
        localStorage.setItem('AC-Token',t);
        setToken(t);
       
    }

    const Logout=()=>{
        localStorage.removeItem('AC-Token');
        setToken(null);
    }

    const tokenRestore=()=>{
    const t=localStorage.getItem('AC-Token');
    setToken(t);
    }
    return  {token,Login,Logout,tokenRestore};

}
export default useToken;