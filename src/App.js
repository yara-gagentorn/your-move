import logo from './logo.svg'
import './App.css'
import MainList from './components/MainList'
import Login from './components/Login'
import Signup from './components/Signup'
import AddMove from './components/AddMove'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AddMove />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <AddMove />
    //     <MainList />
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1>Welcome to my app. Please login</h1> */}
    //   </header>
    // </div>
  )
}

export default App
