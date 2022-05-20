import React, { useState } from 'react';
import { SignupContext } from './../Context';

export default function ContextWrapper({ children }) {
    const [userCredentials, setUserCredentials] = useState({
        firstname: '',
    });

    return (
        <SignupContext.Provider value={{ userCredentials, setUserCredentials }}>
            {children}
        </SignupContext.Provider>
    );
}
