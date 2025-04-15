import React from 'react'
import NavBar from './components/Header/NavBar'
import HomePage from './components/HomePage/HomePage'
import About from './components/AboutMe/AboutUs'
import Services from './components/Services/services'
import Portfolio from './components/MyWork/Portfolio'
import ContactForm from './components/Contect/Contect_Us'
import Footer from './components/Footer/Footer'

function App() {
 
  return (
   <>
   <NavBar/>
   <HomePage/>
   <About/>
   <Services/>
   <Portfolio/>
   <ContactForm/>
   <Footer/>
   </>
  )
}

export default App
