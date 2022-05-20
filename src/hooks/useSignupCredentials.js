import React, { useContext } from 'react';
import { SignupContext } from '../Context';

export default function useSignupCredentials() {
    const { userCredentials, setUserCredentials } = useContext(SignupContext);

    const saveUserData = (data) => {
        setUserCredentials(data);
        localStorage.setItem('userCredentials', JSON.stringify(data));
    };

    const removeUserData = () => {
        setUserCredentials(null);
        localStorage.removeItem('userCredentials');
    };

    const getUserData = () => {
        const userData = localStorage.getItem('userCredentials');
        setUserCredentials(JSON.parse(userData));
    };

    return { userCredentials, saveUserData, removeUserData, getUserData };
}
