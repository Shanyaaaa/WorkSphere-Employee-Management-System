import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [UserData, setUserData] = useState({ employees: [], admin: [] })
    
    useEffect(() => {
        setLocalStorage()
        const {employees,admin} = getLocalStorage()
        setUserData({employees , admin})
  
    }, []);
    

  return (
    <div>
        <AuthContext.Provider value = {UserData}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
