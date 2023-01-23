import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { ref, set } from 'firebase/database'

function AddMove() {
  const [move, setMove] = useState('')

  const addMove = async (e) => {
    e.preventDefault()
    try {
      console.log('trying...', db)

      set(ref(db, 'moves'), {
        move: move,
      })

      // const docRef = await addDoc(collection(db, 'moves'), {
      //   move: move,
      // })
      // console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
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
