import React, { createContext } from 'react';
export const AuthContext = createContext();

const usercontext = ({ children }) => {
    const user = { displayName: 'Afjal' }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default usercontext;