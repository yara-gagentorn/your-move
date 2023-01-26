import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        console.log('FAIL!!!')
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
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
    </>
  )
}

export default Signup
