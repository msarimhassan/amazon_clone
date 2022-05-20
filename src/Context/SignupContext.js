import React, { createContext,useState } from 'react';

const UserContext = createContext();
const CredentialProvider = ({children}) => {
    const [userCredentials,setUserCredentials]=useState({
         firstname:'',
         lastname:'',
         email:'',
         password:'',
         repassword:'',
    })
    const value={
        userCredentials,
        setUserCredentials
    }
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
};
export { CredentialProvider, UserContext };
