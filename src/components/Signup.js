import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSignup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setMessage('')
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
      <button name="register" onClick={() => handleSignup(email, password)}>
        Signup
      </button>
      {message && <div>{message}</div>}
    </>
  )
}

export default Signup
