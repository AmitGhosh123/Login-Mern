import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
