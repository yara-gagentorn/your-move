import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import React from 'react'
import { Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login')
      }
    })
    return () => unsubscribe()
  }, [navigate])

  return auth.currentUser ? <Component {...rest} /> : navigate('/login')
}

export default PrivateRoute
