import { useContext } from "react";
import {UserContext} from '../Context'

const  useToken=()=>{

    const { token, setToken,currentUser,setCurrentUser } = useContext(UserContext);

    const Login=(t)=>{
        localStorage.setItem('AC-Token',t);
        setToken(t);
       
    }

    const Logout=()=>{
        localStorage.removeItem('AC-Token');
        localStorage.removeItem('user');
        setCurrentUser(null);
        setToken(null);
    }

    const tokenRestore=()=>{
    const t=localStorage.getItem('AC-Token');
    setToken(t);
    }

    const setProfile = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
    }

    const getProfile = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
        return currentUser;
    }

    return  {token,Login,Logout,tokenRestore,setProfile,getProfile,currentUser};

}
export default useToken;