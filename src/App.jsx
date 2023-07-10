import React from 'react'
import './App.css'
import Footer from './componentes/Footer'
import Hero from './componentes/Hero'
import Navbar from './componentes/Navbar'
import Descripcion from './componentes/Descripcion'
import Agenda from './componentes/Agenda'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Descripcion></Descripcion>
    <Agenda></Agenda>
    <Footer></Footer>
    </>
  )
}

export default App
