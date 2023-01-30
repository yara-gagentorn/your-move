import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../utils/firebase'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
