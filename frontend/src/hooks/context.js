/*import {
    useState,
    createContext,
    useContext,
    useEffect
} from 'react'
import React from 'react'
  
    import { currentUserFn } from '../services/auth'
    
    export const AppContext = createContext()
    
    export const AppCtxProvider = props => {
        const [user, setUser] = useState(null)
    
        useEffect(() => {
        async function getSessionData() {
            const { data } = await currentUserFn()
            login(data);
        }
    
        getSessionData()
        }, [])
    
        const login = userInfo => {
        setUser(userInfo)
        }
    
        const logout = () => {
        //TODO: Cerrar la sesion en el server y en el cliente
        setUser(null)
        }
    
        const value = { user, login, logout }
    
        return (
        <AppContext.Provider {...props} value={value} />
        )
    }
    
    // Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx
    
    export const useContextInfo = () => useContext(AppContext)
    */

   import { useState, createContext, useContext, useEffect, useMemo } from "react";
   import { currentUserFn } from "../services/auth";
   import React from 'react'


   export const AppContext = createContext();
   
   export const AppCtxProvider = (props) => {
     const [user, setUser] = useState(null);
     useEffect(() => {
       async function getSessionData() {
         const { data: currentUser } = await currentUserFn();
         if (currentUser) setUser(currentUser);
       }
       getSessionData();
     }, []);
   
     const login = (userInfo) => setUser(userInfo);
   
     const logout = () => setUser(null);
   
     const value = useMemo(() => ({ user, login, logout }), [user]);
   
     return <AppContext.Provider value={value} {...props} />;
   };
   
   export const useContextInfo = () => useContext(AppContext);
   
