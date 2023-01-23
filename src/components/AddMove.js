import React, { useState } from 'react'
import { db } from '../utils/firebase'
import { ref, set } from 'firebase/database'

function AddMove() {
  const [move, setMove] = useState('')
  //const movesCollection = db.collection("moves")

  const addMove = (e) => {
    set(ref(db, 'moves/' + move), {
      moveName: move,
    })
  }

  return (
    <div>
      <h1>My List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new move"
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
