import React, { useState, useEffect } from 'react'
import { db } from '../utils/firebase'
import { ref, onValue, remove } from 'firebase/database'

function MainList() {
  const [moves, setMoves] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    onValue(ref(db, 'moves/'), (snapshot) => {
      setMoves([])
      const data = snapshot.val()
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

  // update
  function handleUpdate(move) {}

  return (
    <>
      <h1>List here:</h1>
      {moves.map((move) => (
        <>
          <span>{move.moveName}</span>
          <button onClick={() => handleDelete(move)}>delete</button>
          <button onClick={() => handleUpdate(move)}>update</button>
        </>
      ))}
    </>
  )
}

export default MainList
