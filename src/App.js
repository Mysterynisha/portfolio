import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Blog from './Component/Blog'
import Skill from './Component/Skill'
import Project from './Component/Project'
import './App.css'
import Section from './Component/Section'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Skill/>
      <Project/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App