import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import StateManagement from './context/StateManagement'
function App() {
  return (

    <BrowserRouter>
      <StateManagement>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </StateManagement>
    </BrowserRouter>
  )
}

export default App