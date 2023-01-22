import React, { Component, useState } from 'react'

function AddMove() {
  const [move, setMove] = useState('')

  const addMove = (e) => {
    e.preventDefault()
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
