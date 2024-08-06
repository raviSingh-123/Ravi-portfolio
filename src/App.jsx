import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Experiance from './components/Experiance/Experiance'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import { Toaster } from 'react-hot-toast'



function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default App

