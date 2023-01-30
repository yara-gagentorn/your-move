import React, { useState, useEffect, useContext } from 'react'
import { db } from '../utils/firebase'
import { ref, set } from 'firebase/database'
import { auth } from '../utils/firebase'
import { UserContext } from './UserContext'

function AddMove() {
  const [move, setMove] = useState('')
  const { user } = useContext(UserContext)

  const addMove = (e) => {
    set(ref(db, 'moves/' + move), {
      moveName: move,
    })
    setMove('')
  }

  return (
    <div>
      <div> {user && <h2>Hello, {user.email}</h2>}</div>
      <h1>My List</h1>

      <div>
        <input
          type="text"
          placeholder="Add a new move"
          value={move}
          onChange={(e) => setMove(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button type="submit" className="btn" onClick={addMove}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddMove
