import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLogged, setIslogged] = useState(false)
  const currentUser = auth.currentUser

  useEffect(() => {
    currentUser ? setIslogged(true) : setIslogged(false)
  }, [currentUser])

  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setMessage(`Welcome, ${user.email}`)
      })
      .catch((error) => {
        setMessage(error.code)
      })
  }

  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)}></input>
      <input
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button name="register" onClick={() => handleLogin(email, password)}>
        Login
      </button>
      {message && <div>{message}</div>}
      {isLogged && (
        <button
          onClick={() => {
            signOut(auth)
              .then(() => setMessage('Bye!'))
              .catch((error) => setMessage(error.code))
          }}
        >
          Logout
        </button>
      )}
    </>
  )
}

export default Login
