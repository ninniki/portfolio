import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Skills } from './Components/Skills/Skills'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Works from './Components/Works/Works'
import Footer from './Components/Footer/Footer'
function App() {

  return (
   <div>
    <Navbar/>
    <Home/>
    <About />
    <Skills />
    <Works/>
    <Footer/>

   </div>
  )
}

export default App
