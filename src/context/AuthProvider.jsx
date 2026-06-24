import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();



const AuthProvider = () => {
    

    return(
        <AuthContext.Provider>
            

        </AuthContext.Provider>
    )
};

export {
    AuthProvider
};

export default AuthContext;