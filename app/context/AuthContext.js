'use client'
import { children, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children})=>{
    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;