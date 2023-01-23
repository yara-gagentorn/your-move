import React, { useState, useEffect } from 'react'
import { db } from '../utils/firebase'
import { ref, onValue, remove } from 'firebase/database'

function MainList() {
  const [moves, setMoves] = useState([])

  useEffect(() => {
    onValue(ref(db, 'moves/'), (snapshot) => {
      setMoves([])
      const data = snapshot.val()
      console.log('snapshot', snapshot)
      if (data !== null) {
        Object.values(data).map((move) =>
          setMoves((oldArray) => [...oldArray, move])
        )
      }
    })
  }, [])

  function handleDelete(move) {
    remove(ref(db, `moves/${move.moveName}`))
  }

  return (
    <>
      <h1>List here:</h1>
      {moves.map((move) => (
        <>
          <span>{move.moveName}</span>
          <button onClick={() => handleDelete(move)}>delete</button>
          <button>update</button>
        </>
      ))}
    </>
  )
}

export default MainList
