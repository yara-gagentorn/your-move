import logo from './logo.svg'
import './App.css'
import MainList from './components/MainList'
import Login from './components/Login'
import Signup from './components/Signup'
import AddMove from './components/AddMove'
import PrivateRoute from './components/PrivateRoute'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<AddMove />} />}
        ></Route>
        <Route exact path="/" element={<AddMove />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
