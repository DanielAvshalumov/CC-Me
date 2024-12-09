'use client'
import AuthService from "@/service/AuthService";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children } : {children:any}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const authenticate = async () => {
            const res = await AuthService.getSession()
            const data = await res.data;
            setCurrentUser(data);
            setLoading(false);
        }
        authenticate();
    },[]);

    const value = {
        currentUser,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}