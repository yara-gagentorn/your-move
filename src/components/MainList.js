import React, { useState, useEffect } from 'react'
import { db } from '../utils/firebase'
import { ref, onValue } from 'firebase/database'

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
  return (
    <>
      <h1>List here:</h1>
      {moves.map((move) => (
        <>
          <h1>{move.moveName}</h1>
        </>
      ))}
    </>
  )
}

export default MainList
