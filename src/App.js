import logo from './logo.svg'
import './App.css'
import MainList from './components/MainList'
import AddMove from './components/AddMove'
import React, { Component } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddMove />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome to my app. Please login</h1> */}
      </header>
    </div>
  )
}

export default App
