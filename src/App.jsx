import React from 'react'
import './App.css'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<Login />} />   
         <Route path="/home" element={<Main />} />      
      </Routes>
    </>
  )
}

export default App
